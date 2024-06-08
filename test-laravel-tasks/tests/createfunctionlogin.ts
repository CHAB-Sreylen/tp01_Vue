
import { Page, expect } from '@playwright/test';

async function login(page: Page, email: string, password: string) {
    // Navigate to the login page
    await page.goto('http://127.0.0.1:8000/login');

    // Ensure the login page is visible
    await expect(page.locator(".panel-heading")).toBeVisible();

    // Fill in the email
    await page.getByLabel("E-Mail Address").fill(email);

    // Fill in the password
    await page.getByLabel("Password").fill(password);

    // Click the login button
    await page.getByRole("button", { name: "Login" }).click();

    // Ensure the user is logged in
    await expect(page.getByText("You are logged in!")).toBeVisible();
}

export {login};