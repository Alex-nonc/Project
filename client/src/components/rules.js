export function changerulesslides(event,contentId) {
    document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.getElementById(contentId).classList.add('active');
    event.currentTarget.classList.add('active');
}

