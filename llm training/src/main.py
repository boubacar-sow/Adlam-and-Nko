from scraper import scrap_website
from storage import save_data

def main():
    base_urls = [
        "https://tabalde.com/",
        "https://tabalde.com/category/%f0%9e%a4%b3%f0%9e%a4%b5%f0%9e%a4%a5%f0%9e%a4%a8%f0%9e%a4%ad%f0%9e%a4%bc%f0%9e%a4%ab/",
    ]
    all_category_urls = [
        "https://tabalde.com/category/%f0%9e%a4%b3%f0%9e%a4%b5%f0%9e%a4%a5%f0%9e%a4%a8%f0%9e%a4%ad%f0%9e%a4%bc%f0%9e%a4%ab/page/" + f"{i}/"
        for i in range(2, 38)
    ]
    base_urls.extend(all_category_urls) 
    for url in base_urls:
        articles = scrap_website(url)
        save_data(articles, 'scrapping/data/processed/articles.json')

if __name__ == "__main__":
    main()
