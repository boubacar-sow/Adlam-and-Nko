from scraper import scrap_website
from storage import save_data

def main():
    base_url = "https://tabalde.com/"
    articles = scrap_website(base_url)
    save_data(articles, 'scrapping/data/processed/articles.json')

if __name__ == "__main__":
    main()