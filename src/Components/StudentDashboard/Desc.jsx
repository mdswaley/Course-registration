import React from 'react'
import { useParams} from 'react-router-dom'
const Desc = (props) => {
    const Params=useParams();
    const{name}=Params;
    let divtext,credit;
    if(name==='java'){
      divtext="Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need to recompile. Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The syntax of Java is similar to C and C++, but has fewer low-level facilities than either of them."
      credit="the course credit: 4"
    }
    else if(name==='C'){
      divtext="C is a general-purpose, procedural programming language that was developed by Dennis Ritchie at Bell Labs in the early 1970s. It was originally designed for the Unix operating system, but has since been ported to many other platforms. C is a very efficient language, and is often used for system programming, embedded systems, and high-performance applications. It is also a popular language for teaching programming fundamentals.C is a relatively low-level language, which means that it gives programmers a lot of control over the hardware and memory of the computer. This makes it a good choice for developing high-performance software and applications that need to be very efficient"
      credit="the course credit: 4"
    }
    else if(name==="andriod app development"){
      divtext="Android app development is the process by which applications are created for devices running the Android operating system. Google states that Android apps can be written using Kotlin, Java, and C++ languages using the Android software development kit (SDK), while using other languages is also possible Android is the most popular mobile operating system in the world, with over 2.5 billion active devices. This makes it a very attractive platform for developers who want to reach a large audience.To get started with Android app development, you will need to install the Android SDK. This includes all of the tools and libraries that you need to build and test your apps. You can also download a variety of tutorials and sample apps from the Android developer website."
      credit="the course credit: 4"
    }
    else if(name==="React js"){
      divtext="React JS is a JavaScript library for building user interfaces. It is declarative, efficient, and flexible. React makes it easy to create interactive UIs by letting you compose complex UIs from small and isolated pieces of code called components.Components are the basic building blocks of React applications. A component can be as simple as a <div> element, or as complex as an entire page. Components are reusable and composable, which means that you can combine them to create more complex UIs.React uses a virtual DOM to efficiently update the UI. The virtual DOM is a lightweight representation of the real DOM. When the state of a component changes, React updates the virtual DOM. Then, React calculates the difference between the real DOM and the virtual DOM, and updates the real DOM only as needed."
      credit="the course credit: 4"
    }
    else if(name==="spring boot"){
      divtext="Spring Boot is a framework that makes it easy to create stand-alone, production-grade Spring applications with minimal amounts of configuration. It takes an opinionated view of the Spring platform and third-party libraries so that you can get started with minimum fuss.Spring Boot provides a number of features that make it a popular choice for developing Java applications, including:Automatic configuration: Spring Boot can automatically configure many of the common features of a Spring application, such as the web server, database connection, and transaction management. This can save you a lot of time and effort, especially if you are new to Spring.Starter dependencies: Spring Boot provides a set of starter dependencies that make it easy to add common features to your application, such as web development, data access, and caching.Embedded web server: Spring Boot can embed a web server, such as Tomcat, Jetty, or Undertow, directly into your application. This means that you do not need to deploy your application to a separate web server container.Production-ready features: Spring Boot provides a number of production-ready features, such as metrics, health checks, and externalized configuration. These features can help you to monitor and manage your application in production."
      credit="the course credit: 4"
    }
    else if(name==="web development"){
      divtext="HTML, CSS, and JavaScript are the three core technologies used in web development.HTML (HyperText Markup Language) is used to create the structure of a web page. It defines the different elements that make up the page, such as headings, paragraphs, images, and links.CSS (Cascading Style Sheets) is used to style the HTML elements on a web page. This includes things like the font, color, size, and layout of the elements.JavaScript is a programming language that is used to add interactivity to web pages. It can be used to create things like animations, games, and dynamic content.Together, HTML, CSS, and JavaScript can be used to create a wide range of websites and web applications, from simple static websites to complex interactive web applications."
      credit="the course credit: 4"
    }
    else if(name==="cloud computing"){
      divtext="text will update later......"
      credit="the course credit: 4"
    }
    else if(name==="data structure"){
      divtext="A data structure is a way of organizing data so that it can be used efficiently. It is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data. Data structures are important because they allow us to store, retrieve, and manipulate data in an efficient and effective way. They are used in almost every type of software, from operating systems to web browsers to video games."
      credit="the course credit: 4"
    }
  
  return (
    <div>
         <title>{props.title}</title>
         <h1 className='text-center' style={{textDecoration:'underline',textTransform:'uppercase'}}>{name}</h1>
        <div className='mt-4'  >{divtext}</div>
        <h2 className="mt-5 text-center">{credit}</h2>
     
    </div>
  )
}

export default Desc
