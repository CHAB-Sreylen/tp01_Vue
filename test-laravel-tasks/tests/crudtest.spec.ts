import { expect, test } from '@playwright/test';

//Feature CRUD 
//4. To test successful create new task 
test.skip('check if user can create new task ', async ({ page }) => {

    await page.goto('http://127.0.0.1:8000/tasks/create');

    await page.getByLabel("E-Mail Address").fill("len@gmail.com");

    await page.getByLabel("Password").fill("12345678");

    await page.getByRole("button",{name:"Login"}).click();

    await page.getByRole("button",{name:"Tasks"}).click();

    await page.getByRole("button",{name:"Create Task"}).click();

    // await expect(page.getByLabel(".panel-heading")).toBeVisible();

    await page.getByLabel("Task Name").fill("cooking");

    await page.getByLabel("Description").fill("for launch");

    await page.getByRole("button",{name:"Create Task"}).click();

    await page.goto("http://127.0.0.1:8000/tasks");

});

//5. To test edit task without checking completed box 
test.skip('check if task can edit without checking completed box',async({page})=>{

    //1. Navigate to http://127.0.0.1:8000/tasks

    await page.goto('http://127.0.0.1:8000/tasks');

    await page.getByLabel("E-Mail Address").fill("len@gmail.com");

    await page.getByLabel("Password").fill("12345678");

    await page.getByRole("button",{name:"Login"}).click();

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

    await page.goto('http://127.0.0.1:8000/tasks');

    await page.getByLabel("E-Mail Address").fill("len@gmail.com");

    await page.getByLabel("Password").fill("12345678");

    await page.getByRole("button",{name:"Login"}).click();

    await page.locator('.fa.fa-pencil').first().click();

    await page.locator('.fa.fa-trash').click();

    await expect(page.getByText("Task Deleted")).toBeVisible();


    





})
