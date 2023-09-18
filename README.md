# 🚀 **Customizable UI Library for Web App Development Teams**

Our library is designed for your project, focusing on flexibility and customization.

## ❓**Why Another UI Library?**

-   Platforms like IBM BPM, PEGA, and Workday have many features. But they're hard to change. Teams often build their own code instead of using these tools. This makes more work later.
-   Making a fully custom app means teams do the same work over and over. This causes repeated code and extra effort.
-   Our UI library aims to fix this. It gives you the basic tools you need to make an app with less code. And it's easy to change to fit your project.

## 🎯 **Key Ideas:**

### **Master Controls**

-   Start with the structure of your app. Make master controls based on this structure.
-   Use these master controls to make sections for forms. One master control can be used for many sections.
-   Use these sections to create pages. One section can be used on different pages.

This makes sure your app's main ideas are used everywhere.

### **Library Connects Configuration and State**

-   Our library links the setup and the current state of the app.
-   Each control works on its own. It only knows about its own data, not other controls.

### **Redux RTKQ**

-   We use Redux RTKQ to manage the app's data and connect to the backend.

### **Other Details**

-   We use hooks to let you change the library how you want.
-   Typescript is used to check the code.
-   Tailwind CSS lets you design the look of the app.
-   NextJS Dynamic Routing handles moving between pages.
