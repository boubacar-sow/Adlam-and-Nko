import requests
from bs4 import BeautifulSoup

def fetch_html(url):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
    }
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return response.content
    else:
        print('Status code: ', response.status_code)
        raise Exception("Failed to fetch data from the url ", url)
                        
def extract_all_website_links(html):
    soup = BeautifulSoup(html, 'html.parser')
    articles = []
    for link in soup.find_all('a', href=True):
        articles.append(link['href'])
    
    return articles

def extract_articles_links(html):
    soup = BeautifulSoup(html, 'html.parser')
    articles = []
    for h2 in soup.find_all('h2', class_='multi-category-post-title'):
        a = h2.find('a', href=True)
        if a:
            articles.append(a['href'])
    return articles

def parse_article(html):
    soup = BeautifulSoup(html, 'html.parser')
    title = soup.find('h1', class_='entry-title').get_text()
    content_div = soup.find('div', class_='entry-content')
    
    content_paragraphs = [p.get_text() for p in content_div.find_all('p')]
    content = '\n'.join(content_paragraphs)

    return {'title': title, 'content': content}

def scrap_website(base_url):
    html = fetch_html(base_url)
    articles_links = extract_articles_links(html)
    articles = []
    for link in articles_links:
        article_html = fetch_html(link)  # Fetch the HTML content for each article
        articles.append(parse_article(article_html))
    return articles