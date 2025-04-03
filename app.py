from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Sample database of American products and their alternatives
products = [
    {
        "name": "Levi's Jeans",
        "isAmerican": True,
        "alternatives": ["Uniqlo Jeans", "Zara Jeans", "H&M Jeans"]
    },
    {
        "name": "Nike Shoes",
        "isAmerican": True,
        "alternatives": ["Adidas", "Puma", "New Balance"]
    },
    {
        "name": "Apple iPhone",
        "isAmerican": True,
        "alternatives": ["Samsung Galaxy", "Xiaomi", "OnePlus"]
    },
    {
        "name": "Ford Cars",
        "isAmerican": True,
        "alternatives": ["Toyota", "Honda", "Volkswagen"]
    }
]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search', methods=['POST'])
def search():
    search_term = request.json.get('product', '').lower()
    
    for product in products:
        if product['name'].lower() == search_term:
            return jsonify(product)
    
    return jsonify({"error": "Product not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)