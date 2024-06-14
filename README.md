# IRIX Desktop Recreation

This project aims to recreate a classic IRIX desktop environment using HTML, CSS, and JavaScript. The interface includes a variety of applications and desktop features reminiscent of the IRIX operating system.

## Features

- **Desktop Icons**: Launch applications by double-clicking icons on the desktop.
- **Toolchest Menu**: Access additional system functions via a clickable menu.
- **Context Menu**: Right-click on the desktop to access context-specific options.
- **Background Chooser**: Change the desktop background from a selection of images.
- **Applications**:
  - **Text Editor**: Simple notepad application for creating and editing text files.
  - **Xeyes**: Fun application where eyes follow the mouse pointer around the desktop.
  - **Xclock**: Digital clock displaying the current time.

## Project Structure

```plaintext
.
├── irix_desktop.html        # Main HTML file
├── styles.css               # CSS styles
├── setup.js                 # Initialization script
├── desktopManagement.js     # Desktop management functionalities
├── appmanagement.js         # Application management functionalities
├── core.js                  # Core utility functions
├── config.js                # Configuration file
├── notepad.js               # Notepad application script
├── xeyes.js                 # Xeyes application script
├── xclock.js                # Xclock application script
└── README.md                # This file


## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, etc.)

### Running the Project

1. Clone the repository:
   
   
2. Open `irix_desktop.html` in your web browser to start the IRIX desktop environment.

### Customization

- **Adding Icons**: Update `irix_desktop.html` to add more desktop icons.
- **Changing Background Images**: Edit the `bgImages` array in `config.js` to add or remove background images.
- **Modifying Applications**: Edit the respective JavaScript files (`notepad.js`, `xeyes.js`, `xclock.js`) to modify or extend application functionalities.

## Troubleshooting

### Common Issues

- **Menu Not Showing**: Ensure the `z-index` and positioning of the `.menu` element are set correctly in `styles.css`.
- **Background Chooser Not Visible**: Verify the `z-index` and positioning of the `.bg-chooser` element.

### Debugging

Use the browser's developer tools (F12) to inspect elements and check console logs for errors or warnings.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Acknowledgements

- Inspired by the classic IRIX desktop environment.

## Contact

For any inquiries or feedback, please go to amirhusain.com
