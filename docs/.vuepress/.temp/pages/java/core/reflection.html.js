export const data = JSON.parse("{\"key\":\"v-cfd3c3dc\",\"path\":\"/java/core/reflection.html\",\"title\":\"Java核心 - 反射\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":5,\"description\":\"Java核心 - 反射 概述 反射就是加载类，并允许以编程的方式解剖类中的各种成分（成员变量、方法、构造器等）。 反射的功能： 获取类的字节码文件 class 对象 获取类的构造器 Constructor 对象 获取类的成员变量 Field 对象 获取类的成员方法 Method 对象 获取Class对象 获取 Class 对象有三种方式：从类、类名、对象获取。 从类中获取：Class c = 类名.class 从类名获取：调用 Class 提供的方法public static Class forName(String package) 用法为 Class c = Class.forName(\\\"com.codermast.Student\\\") 从对象获取：Object 提供的方法public Class getClass() 用法为 Class c = 对象.getClass()\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://www.codermast.com/java/core/reflection.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"CoderMast编程桅杆\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Java核心 - 反射\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Java核心 - 反射 概述 反射就是加载类，并允许以编程的方式解剖类中的各种成分（成员变量、方法、构造器等）。 反射的功能： 获取类的字节码文件 class 对象 获取类的构造器 Constructor 对象 获取类的成员变量 Field 对象 获取类的成员方法 Method 对象 获取Class对象 获取 Class 对象有三种方式：从类、类名、对象获取。 从类中获取：Class c = 类名.class 从类名获取：调用 Class 提供的方法public static Class forName(String package) 用法为 Class c = Class.forName(\\\"com.codermast.Student\\\") 从对象获取：Object 提供的方法public Class getClass() 用法为 Class c = 对象.getClass()\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"友人CoderMast\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Java核心 - 反射\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"友人CoderMast\\\",\\\"url\\\":\\\"https://www.codermast.com\\\",\\\"email\\\":\\\"codermast@163.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"概述\",\"slug\":\"概述\",\"link\":\"#概述\",\"children\":[]},{\"level\":2,\"title\":\"获取Class对象\",\"slug\":\"获取class对象\",\"link\":\"#获取class对象\",\"children\":[]},{\"level\":2,\"title\":\"获取类的构造器\",\"slug\":\"获取类的构造器\",\"link\":\"#获取类的构造器\",\"children\":[]},{\"level\":2,\"title\":\"获取类的成员变量\",\"slug\":\"获取类的成员变量\",\"link\":\"#获取类的成员变量\",\"children\":[]},{\"level\":2,\"title\":\"获取类的成员方法\",\"slug\":\"获取类的成员方法\",\"link\":\"#获取类的成员方法\",\"children\":[]},{\"level\":2,\"title\":\"反射的作用\",\"slug\":\"反射的作用\",\"link\":\"#反射的作用\",\"children\":[]}],\"readingTime\":{\"minutes\":7.11,\"words\":2133},\"filePathRelative\":\"java/core/reflection.md\",\"excerpt\":\"<h1> Java核心 - 反射</h1>\\n<h2> 概述</h2>\\n<p>反射就是加载类，并允许以编程的方式解剖类中的各种成分（成员变量、方法、构造器等）。</p>\\n<p>反射的功能：</p>\\n<ol>\\n<li>获取类的字节码文件 class 对象</li>\\n<li>获取类的构造器 Constructor 对象</li>\\n<li>获取类的成员变量 Field 对象</li>\\n<li>获取类的成员方法 Method 对象</li>\\n</ol>\\n<h2> 获取Class对象</h2>\\n<p>获取 Class 对象有三种方式：从类、类名、对象获取。</p>\\n<ul>\\n<li>从类中获取：Class c = 类名.class</li>\\n<li>从类名获取：调用 Class 提供的方法<code>public static Class forName(String package)</code> 用法为 <code>Class c = Class.forName(\\\"com.codermast.Student\\\")</code></li>\\n<li>从对象获取：Object 提供的方法<code>public Class getClass()</code> 用法为 <code>Class c = 对象.getClass()</code></li>\\n</ul>\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}