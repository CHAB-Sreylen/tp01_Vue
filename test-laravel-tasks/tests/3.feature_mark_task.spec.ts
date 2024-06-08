import { expect, test } from '@playwright/test';
import {login} from './createfunctionlogin';
// Feature Mark Task

// 7. To test successful mark task as completed 

test('test successful mark task as complete',async({page})=>{

    
    await login(page,"len@gmail.com","12345678");

    await page.goto('http://127.0.0.1:8000/tasks');   
    
    await page.locator('.fa.fa-pencil').first().click();

    await page.locator('input[type="checkbox"]').click();

    await page.locator('.fa.fa-save').click();

    await expect(page.getByText('Task updated')).toBeVisible();


});

//8. To test successful mark task as incompleted 

test('test successful mark task as incompleted',async({page})=>{

    await login(page,"len@gmail.com","12345678");

    await page.goto('http://127.0.0.1:8000/tasks'); 

    await page.locator('.fa.fa-pencil').first().click();

    await page.locator('.fa.fa-save').click();

    await expect(page.getByText('Task updated')).toBeVisible();


});