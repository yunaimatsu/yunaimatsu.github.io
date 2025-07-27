Threads and Processes

Ruby gives you two basic ways to organize your program so that you can run different parts of it ``at the same time.'' You can split up cooperating tasks within the program, using multiple threads, or you can split up tasks between different programs, using multiple processes. Let's look at each in turn.

## マルチスレッド
2つのことを同時に行う最も簡単な方法は、Rubyのスレッドを使用することです。
これらは完全にプロセス内で実装され、Rubyインタプリタ内で動作します。
これにより、Rubyスレッドは完全に移植可能で、オペレーティングシステムには依存しませんが、ネイティブスレッドを使用することで得られる特定の利点は得られません。
スレッド飢餓（低優先度のスレッドが実行されない）を経験する可能性があります。
また、スレッドがデッドロック状態になると、プロセス全体が停止することがあります。
もしスレッドが長時間かかるオペレーティングシステムへの呼び出しを行うと、すべてのスレッドが停止し、インタプリタが制御を取り戻すまで他のスレッドは停止します。
ただし、これらの潜在的な問題に不安を感じても、Rubyスレッドはコードの並列処理を実現するための軽量で効率的な方法です。

### Rubyスレッドの作成
新しいスレッドの作成は非常に簡単です。次のコード断片は、Webページのセットを並列でダウンロードするものです。各リクエストに対して、コードはHTTPトランザクションを処理するための個別のスレッドを作成します。

```ruby
require 'net/http'

pages = %w(
  www.rubycentral.com
  www.awl.com
  www.pragmaticprogrammer.com
)

threads = []

for page in pages
  threads << Thread.new(page) { |myPage|
    h = Net::HTTP.new(myPage, 80)
    puts "Fetching: #{myPage}"
    resp, data = h.get('/', nil)
    puts "Got #{myPage}:  #{resp.message}"
  }
end

threads.each { |aThread| aThread.join }
```

結果は次のようになります：

```text
Fetching: www.rubycentral.com
Fetching: www.awl.com
Fetching: www.pragmaticprogrammer.com
Got www.rubycentral.com:  OK
Got www.pragmaticprogrammer.com:  OK
Got www.awl.com:  OK
```

このコードを詳細に見てみましょう。新しいスレッドは`Thread.new`を使って作成され、その中で実行されるコードがブロックとして渡されます。今回のケースでは、`net/http`ライブラリを使用して、指定されたサイトのトップページを取得しています。このトレースから、これらのフェッチが並列で行われていることがわかります。

スレッドを作成するとき、必要なHTMLページをパラメータとして渡します。このパラメータは`myPage`としてブロックに渡されます。なぜ、単に`page`という変数の値をブロック内で使うのではなく、`myPage`という名前を使っているのでしょうか？スレッドは、スレッドが開始された時点で存在しているすべてのグローバル変数、インスタンス変数、ローカル変数を共有します。兄弟がいる人ならわかるように、共有が必ずしも良いことばかりではないのです。この場合、3つのスレッドすべてが`page`という変数を共有します。最初のスレッドが開始され、`page`は`http://www.rubycentral.com`に設定されます。その間にスレッドを作成するループは続いています。2回目では、`page`が`http://www.awl.com`に設定されます。もし最初のスレッドがまだ`page`変数を使い終わっていなければ、新しい値が使われてしまうことになります。このようなバグは追跡が難しいです。しかし、スレッドブロック内で作成されたローカル変数は、そのスレッド専用のローカル変数であり、各スレッドが独自のコピーを持ちます。今回の場合、`myPage`変数はスレッドが作成された時に設定され、各スレッドは独自のページアドレスのコピーを持つことになります。

### スレッドの操作

プログラムの最後の行で発生するもう一つの微妙な点があります。なぜ、作成した各スレッドで`join`を呼び出しているのでしょうか？Rubyプログラムが終了すると、すべての実行中のスレッドは終了しますが、特定のスレッドが終了するのを待つためには、そのスレッドの`Thread#join`メソッドを呼び出すことができます。呼び出し元のスレッドは、指定されたスレッドが終了するまでブロックされます。各リクエストスレッドで`join`を呼ぶことで、メインプログラムが終了する前に、すべてのリクエストが完了することを確認できます。

`join`に加えて、スレッドを操作するための便利なルーチンがいくつかあります。まず、現在のスレッドには常に`Thread.current`を使ってアクセスできます。また、`Thread.list`を使用すると、実行可能または停止したすべてのスレッドのリストを取得できます。特定のスレッドの状態を確認するには、`Thread#status`や`Thread#alive?`を使います。さらに、`Thread#priority=`を使用して、スレッドの優先度を調整することができます。優先度の高いスレッドは、低いスレッドよりも先に実行されます。

### スレッド変数

前のセクションで説明したように、スレッドは作成時にスコープ内にある変数には通常アクセスできますが、スレッドブロック内で作成されたローカル変数はそのスレッド専用です。しかし、他のスレッド（メインスレッドも含む）からアクセスできるスレッド専用の変数が必要な場合もあります。その場合、スレッドにはスレッドローカル変数を作成し、名前でアクセスする特別な機能があります。スレッドオブジェクトを`Hash`のように扱い、`[]=`で要素を書き込み、`[]`で読み取ります。次の例では、各スレッドがスレッドローカル変数`mycount`を使って、`count`変数の現在の値を記録します（このコードには競合状態がありますが、同期についてはまだ説明していないので、今は無視します）。

```ruby
count = 0
arr = []

10.times do |i|
  arr[i] = Thread.new {
    sleep(rand(0)/10.0)
    Thread.current["mycount"] = count
    count = 1
  }
end

arr.each {|t| t.join; print t["mycount"], ", "}
puts "count = #{count}"
```

結果は次の通りです：

```text
8, 0, 3, 7, 2, 1, 6, 5, 4, 9, count = 10
```

メインスレッドはサブスレッドの終了を待ち、その後、各スレッドが記録した`count`の値を出力します。興味を引くために、各スレッドは値を記録する前にランダムな時間を待機します。

### スレッドと例外

もしスレッドが処理されていない例外を発生させた場合、どうなるのでしょうか？それは`abort_on_exception`フラグの設定に依存します。`abort_on_exception`が`false`（デフォルト）であれば、処理されていない例外は現在のスレッドを終了させ、他のスレッドはそのまま実行され続けます。以下の例では、スレッド3が失敗して出力を生成しませんが、他のスレッドのトレースは表示されます。

```ruby
threads = []
6.times { |i|
  threads << Thread.new(i) {
    raise "Boom!" if i == 3
    puts i
  }
}
threads.each {|t| t.join }
```

結果は次の通りです：

```ruby
01 2
prog.rb:4: Boom! (RuntimeError)
  from prog.rb:8:in `join'
  from prog.rb:8
  from prog.rb:8:in `each'
  from prog.rb:8
```

しかし、`abort_on_exception`を`true`に設定すると、未処理の例外が発生するとすべてのスレッドが終了します。スレッド3が終了した時点で、もう出力は生成されません。

```ruby
Thread.abort_on_exception = true
threads = []
6.times { |i|
  threads << Thread.new(i) {
    raise "Boom!" if i == 3
    puts i
  }
}
threads.each {|t| t.join }
```

結果は次の通りです：

```ruby
01 2
prog.rb:5: Boom! (RuntimeError)
  from prog.rb:7:in `initialize'
  from prog.rb:7:in `new'
  from prog.rb:7
  from prog.rb:3:in `times'
  from prog.rb:3
```
## Controlling the Thread Scheduler
In a well-designed application, you'll normally just let threads do their thing; building timing dependencies into a multithreaded application is generally considered to be bad form.
However, there are times when you need to control threads. Perhaps the jukebox has a thread that displays a light show. We might need to stop it temporarily when the music stops. You might have two threads in a classic producer-consumer relationship, where the consumer has to pause if the producer gets backlogged.
Class Thread provides a number of methods to control the thread scheduler. Invoking Thread.stop stops the current thread, while Thread#run arranges for a particular thread to be run. Thread.pass deschedules the current thread, allowing others to run, and Thread#join and Thread#value suspend the calling thread until a given thread finishes.
We can demonstrate these features in the following, totally pointless program.
```ruby
t = Thread.new { sleep .1; Thread.pass; Thread.stop; }
t.status	»	"sleep"
t.run
t.status	»	"run"
t.run
t.status	»	false
```
However, using these primitives to achieve any kind of real synchronization is, at best, hit or miss; there will always be race conditions waiting to bite you. And when you're working with shared data, race conditions pretty much guarantee long and frustrating debugging sessions. Fortunately, threads have one additional facility---the idea of a critical section. Using this, we can build a number of secure synchronization schemes.
## Mutual Exclusion
The lowest-level method of blocking other threads from running uses a global ``thread critical'' condition. When the condition is set to true (using the Thread.critical= method), the scheduler will not schedule any existing thread to run. However, this does not block new threads from being created and run. Certain thread operations (such as stopping or killing a thread, sleeping in the current thread, or raising an exception) may cause a thread to be scheduled even when in a critical section.
Using Thread.critical= directly is certainly possible, but it isn't terribly convenient. Fortunately, Ruby comes packaged with several alternatives. Of these, two of the best, class Mutex and class ConditionVariable, are available in the thread library module; see the documentation beginning on page 457.
### The Mutex Class
Mutex is a class that implements a simple semaphore lock for mutually exclusive access to some shared resource. That is, only one thread may hold the lock at a given time. Other threads may choose to wait in line for the lock to become available, or may simply choose to get an immediate error indicating that the lock is not available.
A mutex is often used when updates to shared data need to be atomic. Say we need to update two variables as part of a transaction. We can simulate this in a trivial program by incrementing some counters. The updates are supposed to be atomic---the outside world should never see the counters with different values. Without any kind of mutex control, this just doesn't work.
```ruby
count1 = count2 = 0
difference = 0
counter = Thread.new do
  loop do
    count1 += 1
    count2 += 1
  end
end
spy = Thread.new do
  loop do
    difference += (count1 - count2).abs
  end
end
sleep 1
Thread.critical = 1
count1	»	184846
count2	»	184846
difference	»	58126
```
This example shows that the ``spy'' thread woke up a large number of times and found the values of count1 and count2 inconsistent.
Fortunately we can fix this using a mutex.
```ruby
require 'thread'
mutex = Mutex.new

count1 = count2 = 0
difference = 0
counter = Thread.new do
  loop do
    mutex.synchronize do
      count1 += 1
      count2 += 1
    end
  end
end
spy = Thread.new do
  loop do
    mutex.synchronize do
      difference += (count1 - count2).abs
    end
  end
end
```
```text
sleep 1
mutex.lock
count1	»	21192
count2	»	21192
difference	»	0
```
By placing all accesses to the shared data under control of a mutex, we ensure consistency. Unfortunately, as you can see from the numbers, we also suffer quite a performance penalty.
### Condition Variables
Using a mutex to protect critical data is sometimes not enough. Suppose you are in a critical section, but you need to wait for some particular resource. If your thread goes to sleep waiting for this resource, it is possible that no other thread will be able to release the resource because it cannot enter the critical section---the original process still has it locked. You need to be able to give up temporarily your exclusive use of the critical region and simultaneously tell people that you're waiting for a resource. When the resource becomes available, you need to be able to grab it and reobtain the lock on the critical region, all in one step.
This is where condition variables come in. A condition variable is simply a semaphore that is associated with a resource and is used within the protection of a particular mutex. When you need a resource that's unavailable, you wait on a condition variable. That action releases the lock on the corresponding mutex. When some other thread signals that the resource is available, the original thread comes off the wait and simultaneously regains the lock on the critical region.
```ruby
require 'thread'
mutex = Mutex.new
cv = ConditionVariable.new

a = Thread.new {
  mutex.synchronize {
    puts "A: I have critical section, but will wait for cv"
    cv.wait(mutex)
    puts "A: I have critical section again! I rule!"
  }
}

puts "(Later, back at the ranch...)"

b = Thread.new {
  mutex.synchronize {
    puts "B: Now I am critical, but am done with cv"
    cv.signal
    puts "B: I am still critical, finishing up"
  }
}
a.join
b.join
```
produces:
```text
A: I have critical section, but will wait for cv(Later, back at the ranch...)

B: Now I am critical, but am done with cv
B: I am still critical, finishing up
A: I have critical section again! I rule!
```
For alternative implementations of synchronization mechanisms, see monitor.rb and sync.rb in the lib subdirectory of the distribution.
## Running Multiple Processes
Sometimes you may want to split a task into several process-sized chunks---or perhaps you need to run a separate process that was not written in Ruby. Not a problem: Ruby has a number of methods by which you may spawn and manage separate processes.
### Spawning New Processes
There are several ways to spawn a separate process; the easiest is to run some command and wait for it to complete. You might find yourself doing this to run some separate command or retrieve data from the host system. Ruby does this for you with the system and backquote methods.
```ruby
system("tar xzf test.tgz")	»	tar: test.tgz: Cannot open: No such file or directory\ntar: Error is not recoverable: exiting now\ntar: Child returned status 2\ntar: Error exit delayed from previous errors\nfalse
result = `date`
result	»	"Sun Jun  9 00:08:50 CDT 2002\n"
```
The method Kernel::system executes the given command in a subprocess; it returns true if the command was found and executed properly, false otherwise. In case of failure, you'll find the subprocess's exit code in the global variable $?.
One problem with system is that the command's output will simply go to the same destination as your program's output, which may not be what you want. To capture the standard output of a subprocess, you can use the backquotes, as with `date` in the previous example. Remember that you may need to use String#chomp to remove the line-ending characters from the result.
Okay, this is fine for simple cases---we can run some other process and get the return status. But many times we need a bit more control than that. We'd like to carry on a conversation with the subprocess, possibly sending it data and possibly getting some back. The method IO.popen does just this. The popen method runs a command as a subprocess and connects that subprocess's standard input and standard output to a Ruby IO object. Write to the IO object, and the subprocess can read it on standard input. Whatever the subprocess writes is available in the Ruby program by reading from the IO object.
For example, on our systems one of the more useful utilities is pig, a program that reads words from standard input and prints them in pig Latin (or igpay atinlay). We can use this when our Ruby programs need to send us output that our 5-year-olds shouldn't be able to understand.
pig = IO.popen("pig", "w+")
pig.puts "ice cream after they go to bed"
pig.close_write
puts pig.gets
produces:
iceway eamcray afterway eythay ogay otay edbay
This example illustrates both the apparent simplicity and the real-world complexities involved in driving subprocesses through pipes. The code certainly looks simple enough: open the pipe, write a phrase, and read back the response. But it turns out that the pig program doesn't flush the output it writes. Our original attempt at this example, which had a pig.puts followed by a pig.gets, hung forever. The pig program processed our input, but its response was never written to the pipe. We had to insert the pig.close_write line. This sends an end-of-file to pig's standard input, and the output we're looking for gets flushed as pig terminates.
There's one more twist to popen. If the command you pass it is a single minus sign (``--''), popen will fork a new Ruby interpreter. Both this and the original interpreter will continue running by returning from the popen. The original process will receive an IO object back, while the child will receive nil.
```ruby
pipe = IO.popen("-","w+")
if pipe
  pipe.puts "Get a job!"
  $stderr.puts "Child says '#{pipe.gets.chomp}'"
else
  $stderr.puts "Dad says '#{gets.chomp}'"
  puts "OK"
end
```
produces:
```text
Dad says 'Get a job!'
Child says 'OK'
```s
In addition to popen, the traditional Unix calls Kernel::fork , Kernel::exec , and IO.pipe are available on platforms that support them. The file-naming convention of many IO methods and Kernel::open will also spawn subprocesses if you put a ``|'' as the first character of the filename (see the introduction to class IO on page 325 for details). Note that you cannot create pipes using File.new ; it's just for files.
### Independent Children
Sometimes we don't need to be quite so hands-on: we'd like to give the subprocess its assignment and then go on about our business. Some time later, we'll check in with it to see if it has finished. For instance, we might want to kick off a long-running external sort.
```ruby
exec("sort testfile > output.txt") if fork == nil
# The sort is now running in a child process
# carry on processing in the main program

# then wait for the sort to finish
Process.wait
```
The call to Kernel::fork returns a process id in the parent, and nil in the child, so the child process will perform the Kernel::exec call and run sort. Sometime later, we issue a Process::wait call, which waits for the sort to complete (and returns its process id).
If you'd rather be notified when a child exits (instead of just waiting around), you can set up a signal handler using Kernel::trap (described on page 427). Here we set up a trap on `SIGCLD`, which is the signal sent on "death of child process."
```ruby
trap("CLD") {
  pid = Process.wait
  puts "Child pid #{pid}: terminated"
  exit
}

exec("sort testfile > output.txt") if fork == nil

# do other stuff...
```
produces:
```text
Child pid 31842: terminated
```
### Blocks and Subprocesses
IO.popen works with a block in pretty much the same way as File.open does. Pass popen a command, such as date, and the block will be passed an IO object as a parameter.
```ruby
IO.popen ("date") { |f| puts "Date is #{f.gets}" }
```
produces:
```text
Date is Sun Jun  9 00:08:50 CDT 2002
```
The IO object will be closed automatically when the code block exits, just as it is with File.open .
If you associate a block with Kernel::fork , the code in the block will be run in a Ruby subprocess, and the parent will continue after the block.
```ruby
fork do
  puts "In child, pid = #$$"
  exit 99
end
pid = Process.wait
puts "Child terminated, pid = #{pid}, exit code = #{$? >> 8}"
```
produces:
```text
In child, pid = 31849
Child terminated, pid = 31849, exit code = 99
```
One last thing. Why do we shift the exit code in $? 8 bits to the right before displaying it? This is a ``feature'' of Posix systems: the bottom 8 bits of an exit code contain the reason the program terminated, while the higher-order 8 bits hold the actual exit code.
