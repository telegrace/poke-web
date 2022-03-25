from bs4 import BeautifulSoup
import json 

pokemon_list = []

def main():
    # get all the links from html
    with open('pokemon-table.html') as html_doc:
        soup = BeautifulSoup(html_doc, 'html.parser')
        all_links = soup.find_all('a')
        links_as_text = '\n'.join([link.text for link in all_links])
        pokemon_list = links_as_text.split('\n\n')
        pokemon_list[0] = "Bulbasaur\nGrass\nPoison" 
 
        i = 0
        while i < len(pokemon_list):
            pokemon_split = (pokemon_list[i].split('\n'))
            pokemon = pokemon_split[0] 
            pokemon_list[i] = pokemon
            i += 1

        with open('../src/data/pokemon-v1.json', 'a',encoding="utf-8") as file:
            json.dump(pokemon_list, file)
main()

