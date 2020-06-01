# Ingredient-Delivery-System
 A System that shows the ingredients available at store to prepare any recipe built using React Application 

### Table of Content

**[Overview](#overview) 2**

**[Tasks](#tasks) 2**

> [Task 1: Activity Flow Diagram of the
> System](#task-1-activity-flow-diagram-of-the-system) 2
> 
> [Task 2: Technology Stacks](#task-2-technology-stacks) 4
> 
> [Front-End](#front-end) 5
> 
> [Back-End](#back-end) 5
> 
> [Task 3: React Application](#task-3-react-application) 6
> 
> [Deployment Links](#deployment-links) 7
> 
> [Demo link](#demo-link) 7
> 
> [GitHub Repo Source Code](#github-repo-source-code) 7

# 

# 

# Overview

We live in a world of constant food recipe innovation. Often, we come
across situations when we are out of ingredients required to prepare our
recipe - whether you are paleo, keto, vegetarian, or just a really big
fan of Martha Stewart. Unlike a lot of delivery services, we require an
efficient and quicker way to get the ingredients necessary to cook our
recipe at our doorstep without wasting time and effort.

In this major implementation of the Ingredient delivery system, we build
a react application that would make the ordering and delivering the
necessary ingredients in the easiest and quickest way possible.

This project is divided into three tasks as shown below:

# Tasks

## **Task 1: Activity Flow Diagram of the System** 

The activity diagram of the complete system, from adding and ordering
the items in the cart to the final confirmation page showing that the
order was placed.

![](media/image5.png)

1.  > User will open the application on the Web browser

2.  > The user would see a google map centered on his current location

3.  > There are markers on the map which denotes the stores nearby the
    > user’s location

4.  > When the user hovers over the marker, it would display the store
    > name and estimated delivery time to get the ingredients delivered
    > to his/her home

5.  > The user then clicks on one of the markers on the map, which would
    > display the list of ingredients available at the stores he/she
    > selected and the price for each ingredient.

6.  > The list of ingredients section would have two buttons ‘+’ and ‘-’
    > to add and remove the quantity of the ingredient from the cart

7.  > The Carts component gets populated as the user adds or removes the
    > ingredient dynamically showing the total price of all the
    > ingredients in the cart

8.  > The user can also select another store from the map and add the
    > items separately with its own total price of items while
    > maintaining the cart items from the previous store (explanation in
    > the demo)

9.  > The user can then click the CHECKOUT button to check out the items
    > from the particular store he/she selected while also maintaining a
    > separate cart state for other stores if he/she had added any items

10. > The User can also click on the RESET button to repeat the process
    > all over again

## **Task 2: Technology Stacks**

The system architecture to build the complete system and technology
stacks required to accomplish this task.

![](media/image4.png)

### **Front-End**

  - > The Front-end of the system can be built using a javascript
    > framework which can be **React** or **Angular** for the WebApp and
    > **React native** for the mobile app

  - > The static content for the website can be hosted on **AWS S3**
    > bucket

  - > **AWS CloudFront** can be used for content delivery which can be
    > helpful to distribute content to the end-users with a high data
    > transfer speed and with low latency which ensures an immediate
    > response from the website as soon as a user searches for
    > information

### **Back-End**

  - > The system implements **RESTful** Web Services over **HTTP**
    > protocol

  - > An **AWS VPC** (**virtual private cloud)** is created to manage
    > and secure the backend servers for the application

  - > **Amazon API gateway** service could be used to create the RESTful
    > APIs that are HTTP based

  - > **AWS Cloudwatch** is used to monitor and manage the services
    > which provide data and actionable insights for AWS in the form of
    > logs and metrics from a single platform

  - > **AWS SES** and **SNS** are used for notification service to the
    > users via email and mobile **SMS** respectively

  - > A **load balancer** is used to route requests to healthy **EC2**
    > instances registered in the availability zones

  - > Multiple **EC2** instances can be created to handle many requests
    
      - > The instances are configured in the private security group and
        > only required ports are made available to the internal EC2
        > instances
    
      - > Each instance will have express js framework to run the node
        > js applications
    
      - > The instance communicates with the Amazon RDS which can be
        > relational like **MySQL** or Non-relational like **MongoDB**
        > or even in-memory database like the **Redis**
    
      - > Container Orchestration like a docker swarm is used to manage
        > the docker services which are running the **nodejs**
        > applications inside docker.
    
      - > Any service could be created using other frameworks like
        > Spring boot and it can communicate internally with other
        > services over REST APIs

  - > **CircleCI** could be used to continuously integrate and deploy
    > the application and also implement chat notification if the build
    > fails

## **Task 3: React Application**

A Single page react application using React with Redux for all the
ingredients in the cart. The page shows a list of ingredients and a
button that says CHECKOUT

1.  > **List all the ingredients and their prices (minimum of 5
    > ingredients)**

> The ingredients are listed when a particular store is selected from
> the map

2.  > **Ability to remove an ingredient**

> A ‘-’ button is provided in the list of ingredients component which
> removes the ingredient from the cart

3.  > **Ability to add more quantity of that ingredient**

> A ‘+’ button is provided in the list of ingredients component which
> adds the ingredient to the cart

4.  > **Ability to select a retail store from a dropdown of known
    > locations**

> The ability to select a retail store is accomplished using a google
> map with markers for the retail stores

5.  > **Update the price of the ingredients when store is selected (or
    > when no store is selected)**

> The prices of the ingredients are updated when another retail store is
> selected from the map. The ingredient component is empty when the
> Reset button is pressed to start all over again.

6.  > **Expected ingredient delivery time that updates based on the
    > store selected**

> The expected delivery time is displayed when the user hovers over the
> markers on the google map

## **Deployment Links**

### **Demo link**

The demo for the project is in gif as shown below

[<span class="underline">https://github.com/anish9461/Ingredient-Delivery-System/blob/master/Demo.gif</span>](https://github.com/anish9461/Ingredient-Delivery-System/blob/master/Demo.gif)

### **GitHub Repo Source Code**

> The GitHub repository for the project is :
> 
> [<span class="underline">https://github.com/anish9461/Ingredient-Delivery-System</span>](https://github.com/anish9461/Ingredient-Delivery-System)
> 
> Clone the repository and run “yarn start” or “npm start”


## Demo
![](Demo.gif)
