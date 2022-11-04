
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})


test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

describe('Part 4', () => {
    test('Check if the Draw, display div with Id of "choices"', async () => {
            await driver.findElement(By.id('draw')).click()
            await driver.sleep(2000)
            const check2 = await driver.findElement(By.id('choices'))
            await driver.sleep(2000)
            expect(await check2.isDisplayed).toBeTruthy()
    });

    test('Check if the Add to Due, display div with Id of "player-duo"', async () => {
        await driver.findElement(By.id('draw')).click()
        await driver.findElement(By.id('bot-btn')).click()
        await driver.sleep(2000)
        const check2 = await driver.findElement(By.id('player-duo'))
        await driver.sleep(2000)
        expect(await check2.isDisplayed).toBeTruthy()
    });

    test('Check if the Add to Due, display div with Id of "player-duo"', async () => {
        await driver.findElement(By.id('draw')).click()
        await driver.findElement(By.xpath(`//button[@name='Add to Duo']`)).click()
        await driver.findElement(By.xpath(`//button[@name='Removed from Duo']`)).click()
        await driver.sleep(2000)
        const check2 = await driver.findElement(By.id('player-duo'))
        await driver.sleep(2000)
        expect(check2).toHaveLength(5)
    });


})

