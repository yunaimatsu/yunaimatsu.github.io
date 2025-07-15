# Browser

## Main functionalities of browser

### Rendering

### User I/O

### User interface(UI)

### Browser engine

- Representative Browsers and JavaScript Engines
    
    
    | Browser | JavaScript Engine | Remarks |
    | --- | --- | --- |
    | Chrome | V8 | V8 is a JavaScript engine developed by Google. As it is open source, it is used not only in Chrome but also in the Edge browser developed by Microsoft. |
    | Safari | JavaScriptCore | JavaScriptCore is developed by Apple. |
    | Firefox | SpiderMonkey | SpiderMonkey is developed by the Mozilla Foundation. |
    | Edge | V8 | V8 is also used in Edge, the browser developed by Microsoft. |
    | etc... |  |  |
- Web API
    
    JavaScriptでブラウザのページを操作するためのツール。
    
    - DOM API
        
        # HTMLは、プログラミング言語で操作できない！
        
        # DOMとは
        Web上の文書のコンテンツと構造からなるオブジェクトのデータ表現。DOMをすることで、HTMLの中身を追加したり削除したり編集したりできる。
        ## API
        このため、**API**(アプリケーションとプログラムを繋ぐ方法)と言われます。<br>ここでは、**アプリケーション**とはWebページ文書(HTMLやCSS)で、**プログラム**はプログラミング言語(JavaScriptやPython)です。つまり、DOMはHTMLとCSSとJavaScriptを繋ぐための技術っていうことです。
        
        HTMLを操作するためには、まずDOMという形式でメモリ上で表示する。
        Webページを表すHTMLなどの文書の構造をメモリ内に表現するもの。
        それぞれのノードがオブジェクトを含んでいる。
        # DOMの使い方
        他の
        # 
        # DOMは`querySelectorAll`
        `querySelectorAll`
        `AbortController`
        `AborSignal`
        `AbstractRange`
        
        Document
        Element
        Node
        
        AbortController
        AbortSignal
        
        AbstractRange
        Range
        StaticRange
        
        <!-- HTMLでは使われない -->
        CDATASection
        
        CharacterData
        Comment
        Text
        
        CustomEvent
        
        DOMError#Depricated
        DOMException
        
        DOMImplementation
        
        DOMParser
        
        DOMPoint
        DOMPointReadOnly
        
        DOMRect
        
        DOMTokenList
        DocumentFragment
        DocumentType
        Event
        EventTarget
        HTMLCollection
        MutationObserver
        MutationRecord
        NamedNodeMap
        NodeIterator
        NodeList
        ProcessingInstruction
        TextDecoder
        TextEncoder
        TimeRanges
        TreeWalker
        XMLDocument
        
    - WebRTC
    - Fetch API
    - XHR API
    - Geolocatin API

### Data storage

### JavaScript engine

### Network

### UI background

### Dev Tool

- Recorder
    
    The **Recorder** tool allows you to record user interactions with a web page and replay them later. It can be useful for debugging, performance testing, or automating repetitive tasks. You can:
    
    - **Record Interactions**: Start recording and perform actions on the page (like clicking, scrolling, or typing). These actions will be recorded as a series of steps.
    - **Replay and Debug**: Replay the recorded steps to see if the page behaves as expected or to identify bugs.
    - **Export Scripts**: Export the recordings as scripts in various formats (like Puppeteer scripts) to automate testing or integrate into CI/CD pipelines.
- **Sources**
    
    The **Sources** panel is used to inspect, debug, and modify the source files of a web page, such as HTML, CSS, and JavaScript. Key features include:
    
    - **File System Access**: View and edit all files loaded by the web page, including scripts, stylesheets, images, and other resources.
    - **Breakpoints**: Set breakpoints in your JavaScript code to pause execution at specific lines or conditions, helping to debug issues.
    - **Step Through Code**: Step through your code line-by-line to understand how it executes.
    - **Call Stack and Scope**: Inspect the call stack, variables, and their current values to understand the state of the program at any point.
- **Network**
    
    The **Network** panel is used to inspect and analyze network activity (HTTP/HTTPS requests) made by the web page. It provides details such as:
    
    - **Request and Response Headers**: View detailed information about every network request, including headers, status codes, response times, and content.
    - **Performance Analysis**: Measure the loading time of resources, identify bottlenecks, and determine which files are slowing down the page.
    - **Filtering and Sorting**: Filter requests by type (e.g., XHR, JS, CSS, images) or sort them to identify critical resources.
    - **Throttling**: Simulate slower network speeds to test how the page performs under different network conditions.
- **Performance**
    
    The **Performance** panel is used to analyze the runtime performance of a web page, including CPU and memory usage. It provides a detailed overview of how a web page performs and identifies potential areas for optimization. Key features include:
    
    - **Record Performance**: Capture a performance trace while interacting with the web page to analyze the frame rate, scripting, rendering, and painting activities.
    - **Analyze Timeline**: Examine the recorded timeline to identify slow tasks, rendering issues, or other bottlenecks.
    - **JavaScript Profiling**: View detailed information about the execution of JavaScript code, including function call stacks and their impact on performance.
- **Memory**
    
    The **Memory** panel helps analyze and diagnose memory usage issues in web applications. It provides tools to detect memory leaks, optimize memory usage, and understand the memory allocation patterns of your application. Key features include:
    
    - **Heap Snapshot**: Capture snapshots of the JavaScript heap to inspect memory usage and analyze objects retained in memory.
    - **Allocation Timeline**: Record memory allocations over time to identify objects that consume significant memory and are not being garbage collected.
    - **Memory Leak Detection**: Use tools to detect potential memory leaks, such as objects that should be removed but are still retained in memory.
- **Application**
    
    The **Application** panel provides access to various storage-related features, including cookies, local storage, session storage, IndexedDB, and service workers. Key functionalities include:
    
    - **Inspect Storage**: View, modify, or delete cookies, local storage, session storage, and IndexedDB data.
    - **Service Workers**: Inspect and manage service workers, which enable offline caching and background tasks.
    - **Cache Management**: View and clear cache storage used by the web application, including assets stored by service workers.
    - **Manifest and PWA Audits**: Check the web app's manifest file and test for Progressive Web App (PWA) readiness.
- **Security**
    
    The **Security** panel provides insights into the security aspects of a web page, such as SSL/TLS certificate details and mixed content warnings. Key features include:
    
    - **SSL/TLS Information**: Inspect details about the site's HTTPS certificates, including issuer, expiration date, and protocol versions.
    - **Mixed Content Warnings**: Identify and fix issues where secure pages are loading insecure content.
    - **Subresource Integrity (SRI)**: Check if SRI is correctly implemented to ensure that third-party resources have not been tampered with.
- **Lighthouse**
    
    **Lighthouse** is an open-source automated tool for improving the quality of web pages. It audits a web page for performance, accessibility, best practices, SEO, and PWA capabilities. Key functionalities include:
    
    - PWA capabilities
        
        PWA (Progressive Web App) capabilities refer to features that allow web applications to provide a native app-like experience. Lighthouse audits for these capabilities include:
        
        - What’s a native app-like experience
            
            A native app-like experience refers to web applications that mimic the look, feel, and functionality of traditional native mobile apps. Key characteristics include:
            
            - **Smooth performance:** Fast loading times and responsive interactions, similar to native apps.
            - **Offline functionality:** Ability to work without an internet connection or in poor network conditions.
            - **Home screen presence:** Can be installed on the device's home screen with an app icon.
            - **Full-screen interface:** Runs in full-screen mode without browser UI elements.
            - **Access to device features:** Utilizes device capabilities like camera, GPS, or push notifications.
            - **Consistent UI:** Maintains a consistent look and feel across different platforms and devices.
            
            These features allow web apps to provide an experience that closely resembles native mobile applications while maintaining the accessibility and reach of web technologies.
            
        - **Installability**: Checks if the app can be installed on the user's device home screen.
            - To install
                
                'To install' means that a web application can be added directly to the user's device home screen, similar to a native app.
                
                When a web app is "installable," it means that the app meets certain criteria set by the browser and the device, allowing it to be treated like a native app. This process usually involves:
                
                1. **Creating a Web App Manifest**: A JSON file that provides the browser with information about the app, such as its name, icons, start URL, and display properties.
                2. **Using Service Workers**: To enable offline capabilities and background processing.
                3. **Secure Context**: Ensuring the app is served over HTTPS.
                
                Once these criteria are met, the user is typically prompted to "install" the app, which will add an icon to their home screen. This icon acts like a shortcut to launch the app in a standalone window, providing a more app-like experience, often with features like offline access, push notifications, and a custom splash screen.
                
        - **Offline functionality**: Verifies if the app works offline or with poor network conditions.
        - **App-like experience**: Ensures the app has features like full-screen mode and proper navigation.
        - **Push notifications**: Checks if the app can send push notifications to engage users.
        - **Performance optimization**: Evaluates if the app is optimized for fast loading and smooth performance on mobile devices.
    - **Performance Audits**: Measure loading speed, interactivity, and rendering performance.
    - **Accessibility Audits**: Check the web page for accessibility issues and provide recommendations for improvements.
    - **SEO Audits**: Analyze the page's SEO performance, such as metadata and mobile-friendliness.
    - **Best Practices**: Identify best practices for web development, such as using HTTPS, minimizing request sizes, and ensuring secure connections.