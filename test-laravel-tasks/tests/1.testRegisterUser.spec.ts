
import { test,Page,expect } from '@playwright/test';
import { login } from './createfunctionlogin';
//  Feature Authenication 
// 1. To register a new user on the web apllication 

test ('check if we can register new user', async ({ page }) => {

    //1. Visit localhost 8000

    await page.goto('http://127.0.0.1:8000');

    // 2. Click button register


    await page.getByText("Register").click();

    //3. Fill in: 

    await page.getByLabel("Name").fill("Sok");

    await page.getByLabel("E-Mail Address").fill("sok@gmail.com");

    await page.getByLabel("Password",{exact:true}).fill("12345678");

    await page.getByLabel("Confirm Password",{exact:true}).fill("12345678")

    //4.Click button register

    await page.getByRole("button",{name:"Register"}).click();

    //5. Assert that user can see "You are loged in "

    await expect(page.getByText("You are logged in!")).toBeVisible();

});

// 2. To test successful login 

test ('check if we can login successfuly',async({page}) => {

    //1. Navigate to the registeration page  http://127.0.0.1:8000/login 

    await page.goto('http://127.0.0.1:8000/login');

    //2. Page will redirect to login: fill in the email, fill in the email, click on button login 

    await expect(page.locator(".panel-heading")).toBeVisible();

    await page.getByLabel("E-Mail Address").fill("len@gmail.com");

    await page.getByLabel("Password").fill("12345678");

    await page.getByRole("button",{name:"Login"}).click();

    await expect(page.getByText("You are logged in!")).toBeVisible();

});

//3. To test logged out user

test ('check if user can logged out',async({page})=>{

    //1. Navigate to the registeration page  http://127.0.0.1:8000/login 

       await page.goto('http://127.0.0.1:8000/login');

    //2. Page will redirect to login: fill in the email, fill in the email, click on button login 

       await expect(page.locator(".panel-heading")).toBeVisible();

       await login(page,"len@gmail.com","12345678");

    await expect(page.getByText("You are logged in!")).toBeVisible();

    //3. Click account menu 

    await page.getByRole("button",{name:"len"}).click();

    await page.getByRole("link",{name:"Logout"}).click();

    //4. You can see "Your Application's Landing Page."
    
    await expect(page.getByText("Your Application's Landing Page.")).toBeVisible();

});


