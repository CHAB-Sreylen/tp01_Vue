import { expect, test } from '@playwright/test';

// Feature Mark Task

// 7. To test successful mark task as completed 

test('test successful mark task as complete',async({page})=>{

    await page.goto('http://127.0.0.1:8000/tasks');

    await page.getByLabel("E-Mail Address").fill("len@gmail.com");

    await page.getByLabel("Password").fill("12345678");

    await page.getByRole("button",{name:"Login"}).click();

    await page.goto('http://127.0.0.1:8000/tasks');   
    
    await page.locator('.fa.fa-pencil').first().click();

    await page.locator('input[type="checkbox"]').click();

    await page.locator('.fa.fa-save').click();

    await expect(page.getByText('Task updated')).toBeVisible();

       // await expect(page.locator('.label-success', { hasText: 'Complete' })).toBeVisible();


});

//8. To test successful mark task as incompleted 

test('test successful mark task as incompleted',async({page})=>{

    await page.goto('http://127.0.0.1:8000/tasks');

    await page.getByLabel("E-Mail Address").fill("len@gmail.com");

    await page.getByLabel("Password").fill("12345678");

    await page.getByRole("button",{name:"Login"}).click();

    await page.goto('http://127.0.0.1:8000/tasks'); 

    await page.locator('.fa.fa-pencil').first().click();

    await page.locator('.fa.fa-save').click();

    await expect(page.getByText('Task updated')).toBeVisible();

    // await expect(page.locator('.label.label-success', { hasText: 'Incomplete' })).toBeVisible();

    




});