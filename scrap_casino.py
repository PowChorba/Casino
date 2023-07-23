from bs4 import BeautifulSoup
import requests
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
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
    for index,link in enumerate(data['iframe']):
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
    driver = webdriver.Chrome()
    driver.maximize_window()
    driver.get('https://roobet.com/tag/slots')

def pragmatic_play():
    data = pd.read_csv('casino.csv')
    counter = 119
    for index,i in enumerate(data['proveedor']):
        if i == 'Pragmatic Play':
            print('Index', counter)
            try:
                juego = data.at[counter,'title']
                juego = juego.replace(' ', '-')
                driver = webdriver.Chrome()
                driver.get(f'https://www.pragmaticplay.com/en/games/{juego.lower()}/?gamelang=en&cur=USD')
                sleep(5)
                driver.find_element(By.XPATH, '//*[@id="game_pop"]/div[3]/a[1]').click()
                sleep(3)
                iframe_demoo = driver.find_element(By.XPATH, '//*[@id="iframe"]').get_attribute('src')
                data.at[counter, 'Iframe'] = iframe_demoo
                data.to_csv('casino.csv', index=False)
                counter += 1 
                sleep(5)
            except:
                print(f'Fallo en {index}')
                counter += 1 
                continue    
  
def caleta():
    proveedor = 'Caleta'
    driver = webdriver.Chrome()
    driver.maximize_window()
    driver.get('https://caletagaming.com/our-games/')
    sleep(10)
    body = driver.find_element(By.TAG_NAME, 'body')
    counter_body = 0
    counter_div = 1
    while counter_body < 22:
        body.send_keys(Keys.PAGE_DOWN)
        counter_body += 1  
        sleep(3)
    while counter_div < 100:
        try:
            link = driver.find_element(By.XPATH, f'/html/body/div[2]/div[3]/div/div/div[2]/div[1]/div/div[{counter_div}]/div[2]/a')
            title = link.text
            link = link.get_attribute('href')
            img = driver.find_element(By.XPATH, f'/html/body/div[2]/div[3]/div/div/div[2]/div[1]/div/div[{counter_div}]/div[1]/a/img').get_attribute('src')
            with open('caleta.csv', 'a', encoding='UTF-8', newline='') as f:
                write = writer(f)
                write.writerow([title,proveedor,img,link])
            counter_div += 1
        except:
            print('Error en', counter_div)
            counter_div += 1        
    print('Listo')        

def caleta_dos():
    data = pd.read_csv('caleta.csv')
    driver = webdriver.Chrome()
    for index,link in enumerate(data['iframe']):
        try:
            driver.get(link)
            sleep(10)
            iframe = driver.find_element(By.XPATH, '//*[@id="desk-embed-container"]').get_attribute('src')
            data.at[index, 'iframe'] = iframe
            data.to_csv('caleta.csv', index=False)
        except:
            continue
            
def spadegaming():
    driver = webdriver.Chrome()
    driver.maximize_window()
    driver.get('https://www.spadegaming.com/games')
    sleep(5)
    driver.find_element(By.XPATH, '//*[@id="app"]/div/div[1]/div[3]/div/ul/li[1]/a').click()
    sleep(5)
    boton = driver.find_element(By.XPATH, '//*[@id="app"]/div/div[2]/section[4]/div/div/div[4]/a')
    boton.click()
    sleep(4)
    boton.click()
    sleep(5)
    body = driver.find_element(By.TAG_NAME, 'body')
    body.send_keys(Keys.PAGE_UP)
    body.send_keys(Keys.PAGE_UP)
    body.send_keys(Keys.PAGE_UP)
    body.send_keys(Keys.PAGE_UP)
    body.send_keys(Keys.PAGE_UP)
    body.send_keys(Keys.PAGE_UP)
    body.send_keys(Keys.PAGE_UP)
    body.send_keys(Keys.PAGE_UP)
    body.send_keys(Keys.PAGE_UP)
    sleep(3)
    counter = 2
    while counter < 100:
        try:
                title = driver.find_element(By.XPATH, f'//*[@id="app"]/div/div[2]/section[4]/div/div/div[4]/div/div[{counter}]/a/h3').text
                imagen = driver.find_element(By.XPATH, f'//*[@id="app"]/div/div[2]/section[4]/div/div/div[4]/div/div[{counter}]/a/div/img').get_attribute('src')
                proveedor = 'Spadegaming'
                link = driver.find_element(By.XPATH, f'//*[@id="app"]/div/div[2]/section[4]/div/div/div[4]/div/div[{counter}]/a').get_attribute('href')
                with open('spadegaming.csv', 'a', encoding='UTF-8', newline='') as f:
                    write = writer(f)
                    write.writerow([title,proveedor, imagen, link])
                counter += 1    
        except:
            body.send_keys(Keys.PAGE_DOWN)
            print('Error')
            sleep(5)
            continue
            

def spadegaming_dos():
    data = pd.read_csv('spadegaming.csv')
    driver = webdriver.Chrome()
    for index,link in enumerate(data['iframe']):
        try:
            driver.get(link)
            driver.maximize_window()
            sleep(5)
            if index == 0:
                driver.find_element(By.XPATH, '//*[@id="app"]/div/div[1]/div[3]/div/ul/li[1]/a').click()
                sleep(10)
            driver.find_element(By.XPATH, '//*[@id="playGame"]').click()
            sleep(10)
            iframe = driver.find_element(By.XPATH, '//*[@id="app"]/div/div[2]/section[1]/div[3]/div/div/div/div/iframe').get_attribute('src')
            data.at[index, 'iframe'] = iframe
            data.to_csv('spadegaming.csv', index=False)
        except:
            print('Entro al error en', link)
            continue
    
        
    
spadegaming_dos()    


# XPATH DE "FUND PLAY" >>> //*[@id="app"]/div[2]/div[2]/div[1]/div[1]/div/div[1]/div[1]/div[2]/button[2]/span[1]
