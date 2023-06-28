export const scroll = (id) => {
    const section = document.getElementById(id);
    if (!section) return
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
};