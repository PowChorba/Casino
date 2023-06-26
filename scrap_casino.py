from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from time import sleep
from csv import writer
import pandas as pd

def scrap():
    driver = webdriver.Chrome()
    driver.maximize_window()
    driver.get('https://roobet.com/tag/slots')
    # driver.get('https://cbet.gg/es-MX/casinos/casino/grid?provider_ids=0&sorting_preset=1')
    contador_click = 1
    sleep(10)
    while contador_click < 79:
        print(contador_click)
        driver.find_element(By.XPATH, '//*[@id="app"]/div[2]/div[2]/div[1]/div/div[2]/div/div/div/div[4]/button').click()
        contador_click += 1
        sleep(5)    
    counter = 1
    while counter < 4000:
    #     juego = driver.find_element(By.XPATH, f'//*[@id="app"]/div[1]/main/div[4]/div[{counter}]')
        try:
            juego = driver.find_element(By.XPATH, f'//*[@id="app"]/div[2]/div[2]/div[1]/div/div[2]/div/div/div/div[2]/div[{counter}]')
            link = driver.find_element(By.XPATH, f'//*[@id="app"]/div[2]/div[2]/div[1]/div/div[2]/div/div/div/div[2]/div[{counter}]/a').get_attribute('href')
            img = juego.find_element(By.XPATH, f'//*[@id="app"]/div[2]/div[2]/div[1]/div/div[2]/div/div/div/div[2]/div[{counter}]/a/div/img').get_attribute('src')
            title = juego.find_element(By.XPATH, f'//*[@id="app"]/div[2]/div[2]/div[1]/div/div[2]/div/div/div/div[2]/div[{counter}]/div/a').text
            proveedor = juego.find_element(By.XPATH, f'//*[@id="app"]/div[2]/div[2]/div[1]/div/div[2]/div/div/div/div[2]/div[{counter}]/div/p').text
            # PARA ABRIR EL LINK DONDE ESTA EL IFRAME
            # driver.execute_script(f"window.open('{link}')")
            # window_handles = driver.window_handles  
            # driver.switch_to.window(window_handles[-1])
            # sleep(15)
            # driver.find_element(By.XPATH, '//*[@id="app"]/div[2]/div[2]/div[1]/div[1]/div/div[1]/div[1]/div[2]/button[2]/span[1]').click()
            # sleep(5)
            # iframe = driver.find_element(By.XPATH, '//*[@id="app"]/div[2]/div[2]/div[1]/div[1]/div/div[1]/div/div/iframe')
            # driver.switch_to.frame(iframe)
            # iframe_demo = driver.find_element(By.XPATH, '//*[@id="game"]').get_attribute('src')
            with open('casino.csv', 'a', encoding='UTF-8', newline='') as f:
                write = writer(f)
                write.writerow([title,proveedor,img, link])
            # driver.close()    
            # driver.switch_to.window(driver.window_handles[0])
            counter += 1
        except:
            with open('error.txt', 'a', encoding='UTF-8', newline='') as f:
                write = writer(f)
                write.writerow([f'Error cuando quizo copiar el iframe de {title} con el contador en {counter}'])
            # driver.close()    
            # driver.switch_to.window(driver.window_handles[0])
            counter += 1     

def replace_link():
    data = pd.read_csv('casino.csv')
    driver = webdriver.Chrome()
    for index,link in enumerate(data['Iframe']):
        try:
            driver.get(link)
            sleep(10)
            driver.find_element(By.XPATH, '//*[@id="app"]/div[2]/div[2]/div[1]/div[1]/div/div[1]/div[1]/div[2]/button[2]/span[1]').click()
            sleep(5)
            iframe = driver.find_element(By.XPATH, '//*[@id="app"]/div[2]/div[2]/div[1]/div[1]/div/div[1]/div/div/iframe')
            driver.switch_to.frame(iframe)
            iframe_demo = driver.find_element(By.XPATH, '//*[@id="game"]').get_attribute('src')
            data.at[index, 'Iframe'] = iframe_demo
            data.to_csv('casino.csv', index=False)
        except:
            continue

def delete_row():
    data = pd.read_csv('casino.csv')
    for index,link in enumerate(data['Iframe']):
        if 'https://roobet.com/game/' in str(link):
            data = data.drop(index=index)
            data.to_csv('casino.csv', index=False)            

def provedores():
    driver = webdriver.Chrome()
    driver.get('https://cbet.gg/es-MX/casinos/casino/grid?provider_ids=0&sorting_preset=1')
    driver.maximize_window()
    sleep(10)
    counter = 1
    while counter < 50:
        # div_container = driver.find_element(By.XPATH, f'//*[@id="app"]/div[1]/aside/div[2]/div[2]/div[{counter}]')
        try:
            img = driver.find_element(By.XPATH, f'//*[@id="app"]/div[1]/aside/div[2]/div[2]/div[{counter}]/div[1]/img').get_attribute('src')
            # img = f'https://cbet.gg/{img}'
            name = driver.find_element(By.XPATH, f'//*[@id="app"]/div[1]/aside/div[2]/div[2]/div[{counter}]/div[1]/div').text
            with open('provedores.csv', 'a', encoding='UTF-8', newline='') as f:
                write = writer(f)
                write.writerow([name,img])
            counter += 1
        except:
            print('[-] Error en la busqueda')    
            counter += 1    

    
provedores()    


# XPATH DE "FUND PLAY" >>> //*[@id="app"]/div[2]/div[2]/div[1]/div[1]/div/div[1]/div[1]/div[2]/button[2]/span[1]
