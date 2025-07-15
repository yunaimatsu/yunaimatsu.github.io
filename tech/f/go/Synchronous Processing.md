# Synchronous Processing

同期処理(Synchronous Processing)とは、ある処理が完了するまで、次の処理を開始しない方式のことです。

つまり、1つの処理が終了するまで、次の処理に進むことができません。

- デメリット
    
    しかし、処理の進行が逐次的であるため、処理速度が遅くなる場合があります。また、ある処理が時間のかかる場合、他の処理が待ち状態になり、プログラム全体のパフォーマンスが低下する可能性があります。
    
- メリット
    
    同期処理は、処理の進行を制御しやすく、プログラムのデバッグや保守がしやすいという利点があります。
    
    同期処理では、処理の流れが一定の順序で進行するため、処理の制御が比較的簡単になります。
    

```python
def add(a, b):    print("start add")    result = a + b    print("end add")    return result
def main():    print("start main")    sum1 = add(1, 2)    sum2 = add(3, 4)    total = add(sum1, sum2)    print("total =", total)    print("end main")
main()
```

GOでは↓

```go
package main
import "fmt"
func add(a, b int) int {    fmt.Println("start add")    result := a + b    fmt.Println("end add")    return result}
func main() {    fmt.Println("start main")    sum1 := add(1, 2)    sum2 := add(3, 4)    total := add(sum1, sum2)    fmt.Println("total =", total)    fmt.Println("end main")}
```

[add関数](Synchronous%20Processing%20989f5159d8ec40948a8a47de5a79c075/add%E9%96%A2%E6%95%B0%20f0822d8a4872442aa99582829d78abe9.md)

[main関数](Synchronous%20Processing%20989f5159d8ec40948a8a47de5a79c075/main%E9%96%A2%E6%95%B0%202b674a207cd0435f9b4b1bed984ca2a9.md)