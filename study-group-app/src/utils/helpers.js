export const validateInput = (input) => {
    return typeof input === 'string' && input.trim().length > 0;
};

export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};