import os
from flask import Flask, render_template, request, flash, redirect, url_for



app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "dev-secret-key-change-in-production")

#örnek portfolyolar
portfolio_projects = [
    {
        'id': 1,
        'name': 'Kuponperest',
        'category': 'Web Design',
        'technology': 'Python & Html & JS',
        'image': 'https://lh3.googleusercontent.com/a/ACg8ocLfaXtUHCwZ2hUOfQ0_-jfjDg8wx99v5SIL5uDZQk-o1j-R_6s=s576-c-no',
        'description': 'Yapay zeka tabanlı kupon tahmin sitesi'
    },
    {
        'id': 2,
        'name': 'Corporate Website',
        'category': 'Web Design',
        'technology': 'Vue.js & Python',
        'image': 'https://pixabay.com/get/gbfe4c6e620ee31800efbb8533aa2c560448e77245ecbe3a3cea7d0a8e5859c2a3f574672325c61d623645e29109e3cde1e74ed26e6ea7e165212fcd3426a9205_1280.png',
        'description': 'Professional corporate website with modern design'
    },
    {
        'id': 3,
        'name': 'Portfolio Dashboard',
        'category': 'Web Design',
        'technology': 'Angular & .NET',
        'image': 'https://pixabay.com/get/g39d927bd33661b115506c1f88805cd72f8f7aa1c4aa01c56c18c9fef1aa3121821f45a00cefa64ad6697c2df267c40e9900862a17e71359a660bf0c3754a861f_1280.jpg',
        'description': 'Interactive portfolio dashboard for professionals'
    },
    {
        'id': 4,
        'name': 'Fitness Tracking App',
        'category': 'Mobile Development',
        'technology': 'React Native',
        'image': 'https://pixabay.com/get/gc27407928a1d67cb507354a28d35cbaf880accf5d08517eef5644caf5b83c4cccdf429b3919226517fa6112121d3cb7e0e5b60d4089ca62136bad87e5e5fbf2e_1280.jpg',
        'description': 'Comprehensive fitness tracking mobile application'
    },
    {
        'id': 5,
        'name': 'Social Media App',
        'category': 'Mobile Development',
        'technology': 'Flutter',
        'image': 'https://pixabay.com/get/g454696d0aee71ff3ddef4919a6b6fb6795a27dfffc52b8d178f6c034891496d2ad71571c3064467b60e6cf37b61d1c9c17c31f0aca590fc53b5f3d2a9f77bd4b_1280.jpg',
        'description': 'Next-generation social media platform'
    },
    {
        'id': 6,
        'name': 'Business Analytics',
        'category': 'Mobile Development',
        'technology': 'Native iOS/Android',
        'image': 'https://pixabay.com/get/gfca16871c9fedb25d5a2bd333ea22972580ccb8f84a00c7318a5ea0969e5e8fe51b8a28c4100ee1610e41fd20f37d9840b5f4e8097b95df750b9b12685385fef_1280.jpg',
        'description': 'Advanced business analytics mobile solution'
    },
    {
        'id': 7,
        'name': 'Action RPG Adventure',
        'category': 'Game Development',
        'technology': 'Unity & C#',
        'image': 'https://pixabay.com/get/g7ff1be499105db1ecf58e14c7e1b9cd20be0f1c5c8cc2cb4349c598f9fce8d4d9d8ab32a71967883c28bc0b0e3aac16437ccbfacb331deb42815af261a3fda39_1280.png',
        'description': 'Immersive action RPG with stunning graphics'
    },
    {
        'id': 8,
        'name': 'Puzzle Strategy Game',
        'category': 'Game Development',
        'technology': 'Unreal Engine',
        'image': 'https://pixabay.com/get/g0162e83a675d9b27d7c5bd9adeb4168f1c957d2eb2dcaf5d559154d3fc1db9d530524938c394ca2f200332761f1d7e227ceee3bbecb26d92f9692540f7c3fd5e_1280.jpg',
        'description': 'Challenging puzzle-strategy hybrid game'
    },
    {
        'id': 9,
        'name': 'Multiplayer Arena',
        'category': 'Game Development',
        'technology': 'Godot Engine',
        'image': 'https://pixabay.com/get/g28d74a70901ea27f66fcf70d2e022e719f18be1d8321ab2c30673b6850107d8ded07451a900e4ecd52b45524f9b28cde868545a5bde4a05118eba383c2f5c2c9_1280.jpg',
        'description': 'Fast-paced multiplayer arena battle game'
    }
]

@app.route('/')
def index():
    return render_template('index.html', projects=portfolio_projects)


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/services')
def services():
    return render_template('services.html')


@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        message = request.form.get('message')

        if name and email and message:
            # In a real application, save to database or send email
            flash('Thank you for your message! We will get back to you soon.', 'success')
            return redirect(url_for('contact'))
        else:
            flash('Please fill in all fields.', 'error')

    return render_template('contact.html')


@app.route('/portfolio')
def portfolio():
    category = request.args.get('category', 'all')
    if category == 'all':
        filtered_projects = portfolio_projects
    else:
        filtered_projects = [p for p in portfolio_projects if p['category'] == category]

    return render_template('portfolio.html', projects=filtered_projects, current_category=category)


@app.route('/project/<int:project_id>')
def project_detail(project_id):
    project = next((p for p in portfolio_projects if p['id'] == project_id), None)
    if not project:
        flash('Project not found.', 'error')
        return redirect(url_for('portfolio'))

    return render_template('project_detail.html', project=project)


@app.route('/pricing')
def pricing():
    return render_template('pricing.html')


@app.route('/api/newsletter', methods=['POST'])
def newsletter_signup():
    email = request.form.get('email')
    if email:

        return {'status': 'success', 'message': 'Successfully subscribed to newsletter!'}
    return {'status': 'error', 'message': 'Invalid email address'}
@app.route('/live-chat')
def live_chat():
    return render_template('live_chat.html')
@app.route('/privacy-policy')
def privacy_policy():
    return render_template('privacy_policy.html')
@app.route('/terms-of-service')
def terms_of_service():
    return render_template('terms_of_service.html')
@app.route('/quote')
def quote():
    return redirect(url_for('contact'))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
