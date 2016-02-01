# switch-toggle

jQuery plugin for switch toggle with middle state.

### Example usage:

```javascript
$('input').switchToggle(options);
```

### Options:

```javascript
// Defaults
options = {
    states: ['enabled', 'disabled'],
    titles: ['', '']
};

// With middle state and title
options = {
    states: ['same', 'enabled', 'disabled'],
    titles: ['Same as group', '', '']
};
```