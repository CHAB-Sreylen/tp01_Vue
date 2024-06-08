import { expect, test } from '@playwright/test';

import { login } from './createfunctionlogin';
//Feature CRUD 
//4. To test successful create new task 
test ('check if user can create new task ', async ({ page }) => {

    await login(page,"len@gmail.com","12345678");

    await page.goto('http://127.0.0.1:8000/tasks/create');

    await page.getByRole("button",{name:"Tasks"}).click();

    await page.getByRole("button",{name:"Create Task"}).click();

    // await expect(page.getByLabel(".panel-heading")).toBeVisible();

    await page.getByLabel("Task Name").fill("cooking");

    await page.getByLabel("Description").fill("for launch");

    await page.getByRole("button",{name:"Create Task"}).click();

    await page.goto("http://127.0.0.1:8000/tasks");

});

//5. To test edit task without checking completed box 
test ('check if task can edit without checking completed box',async({page})=>{

    //1. Navigate to http://127.0.0.1:8000/tasks

    await login(page,"len@gmail.com","12345678");

    await page.goto('http://127.0.0.1:8000/tasks');

    // await page.getByRole("link",{name:".fa-pencil"}).click();
    
    // await expect(page.getByRole("button",{name:".fa-pencil"})).click();

    await page.locator('.fa.fa-pencil').first().click();

    let taskName = await page.getByLabel("Task Name").inputValue();

    await page.getByLabel("Task Name").fill(taskName + " updated");

    let taskDescription = await page.getByLabel("Task Description").inputValue();

    await page.getByLabel("Task Description").fill(taskDescription + " updated");

    await page.locator('.fa.fa-save').click();

    await expect(page.getByText("Task Updated")).toBeVisible();

});

// 6.To check successful deleted task 

test ('check successful deleted task ',async({page})=>{

    await login(page,"len@gmail.com","12345678");

    await page.goto('http://127.0.0.1:8000/tasks');

    await page.locator('.fa.fa-pencil').first().click();

    await page.locator('.fa.fa-trash').click();

    await expect(page.getByText("Task Deleted")).toBeVisible();



})
