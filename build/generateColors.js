var Color = require('color');

module.exports = function generateColors(base) {

  var white               = "#fff";
  var red                 = "#ff5252";
  var black_80_pc         = "#00000080";

  var base_minus_2 = lighten(-2);
  var base_plus_2  = lighten(2);
  var base_plus_6  = lighten(6);
  var base_medium  = lighten(16);
  var accent       = accentColor();

  function lighten(amount) {
    var c = Color(base).hsl();
    c.color[2] += amount;
    return c.hex();
  }

  function accentColor() {
    var c = Color(base).hsv();
    c.color[1] = 50;
    c.color[2] = 100;
    console.log(c);
    return c.hex();
  }


   /*
    * https://code.visualstudio.com/docs/getstarted/theme-color-reference
    */

  var colors = {

    /*
     * Contrast Colors
     * The contrast colors are typically only set for high contrast themes. If set, they add an additional border around items across the UI to increase the contrast.
     */

    // An extra border around active elements to separate them from others for greater contrast.
    //"contrastActiveBorder": ,

    // An extra border around elements to separate them from others for greater contrast.
    //"contrastBorder": ,


    /*
     * Base Colors
     */

    // Overall border color for focused elements. This color is only used if not overridden by a component.
    "focusBorder": accent,

    // Overall foreground color. This color is only used if not overridden by a component.
    //"foreground": ,

    // Shadow color of widgets such as Find/Replace inside the editor.
    "widget.shadow": black_80_pc,


    /*
     * Button Control
     * A set of colors for button widgets such as **Open Folder** button in the Explorer of a new window.
     */

    // Button background color.
    //"button.background": ,

    // Button foreground color.
    //"button.foreground": ,

    // Button background color when hovering.
    //"button.hoverBackground": ,


    /*
     * Dropdown Control
     * A set of colors for all dropdown widgets such as in the Integrated Terminal or the Output panel.
     */

    // Dropdown background.
    //"dropdown.background": ,

    // Dropdown border.
    //"dropdown.border": ,

    // Dropdown foreground.
    //"dropdown.foreground": ,


    /*
     * Input Control
     * Colors for input controls such as in the Search view or the Find/Replace dialog.
     */
    
    // Input box background.
    "input.background": base_plus_6,
    
    // Input box border.
    //"input.border": ,
    
    // Input box foreground.
    //"input.foreground": ,
    
    // Border color of activated options in input fields.
    //"inputOption.activeBorder": ,
    
    // Input validation background color for error severity.
    //"inputValidation.errorBackground": ,
    
    // Input validation border color for error severity.
    //"inputValidation.errorBorder": ,
    
    // Input validation background color for information severity.
    //"inputValidation.infoBackground": ,
    
    // Input validation border color for information severity.
    //"inputValidation.infoBorder": ,
    
    // Input validation background color for information warning.
    //"inputValidation.warningBackground": ,
    
    // Input validation border color for warning severity.
    //"inputValidation.warningBorder": ,

    /*
     * Scroll Bar Control
     */

    // Scroll Bar shadow to indicate that the view is scrolled.
    "scrollbar.shadow": black_80_pc,

    // Slider background color when active.
    //"scrollbarSlider.activeBackground": ,

    // Slider background color.
    //"scrollbarSlider.background": ,

    // Slider background color when hovering.
    //"scrollbarSlider.hoverBackground": ,


    /*
     * Lists and Trees
     * Colors for list and trees like the File Explorer. An active list/tree has keyboard focus, an inactive does not.
     */

    // List/Tree background color for the selected item when the list/tree is active.
    //"list.activeSelectionBackground": ,

    // List/Tree foreground color for the selected item when the list/tree is active.
    //"list.activeSelectionForeground": ,

    // List/Tree drag and drop background when moving items around using the mouse.
    //"list.dropBackground": ,

    // List/Tree background color for the focused item when the list/tree is active.
    //"list.focusBackground": ,

    // List/Tree foreground color of the match highlights when searching inside the list/tree.
    //"list.highlightForeground": ,

    // List/Tree background when hovering over items using the mouse.
    //"list.hoverBackground": ,

    // List/Tree background color for the selected item when the list/tree is inactive.
    //"list.inactiveSelectionBackground": ,


    /*
     * Activity Bar
     * The Activity Bar is displayed either on the far left or right of the workbench and allows fast switching between views of the Side Bar.
     */

    // Activity Bar background color.
    "activityBar.background": base_plus_2,

    // Drag and drop feedback color for the Activity Bar items.
    //"activityBar.dropBackground": ,

    // Activity bar foreground color (for example used for the icons).
    //"activityBar.foreground": ,

    // Activity notification badge background color.
    "activityBarBadge.background": red,

    // Activity notification badge foreground color.
    "activityBarBadge.foreground": white,


    /*
     * Side Bar
     * The Side Bar contains views like the Explorer and Search.
    */

    // Side Bar background color.
    "sideBar.background": base_minus_2,

    // Side Bar section header background color.
    //"sideBarSectionHeader.background": ,

    // Side Bar title foreground color.
    //"sideBarTitle.foreground": ,


    /*
     * Editor Groups & Tabs
     * Editor Groups are the containers of editors. There can be up to three editor groups. A Tab is the container of an editor. Multiple Tabs can be opened in one editor group.
     */

    // Background color of an editor group. The background color shows up when dragging editor groups around.
    "editorGroup.background": white,

    // Color to separate multiple editor groups from each other.
    "editorGroup.border": white,

    // Background color when dragging editors around.
    //"editorGroup.dropBackground": ,

    // Background color of the editor group title header when Tabs are disabled.
    //"editorGroupHeader.noTabsBackground": ,

    // Background color of the Tabs container.
    "editorGroupHeader.tabsBackground": base_minus_2,


    // Active Tab background color.
    //"tab.activeBackground": ,

    // Active Tab foreground color in an active group.
    //"tab.activeForeground": ,

    // Border to separate Tabs from each other.
    "tab.border": base_minus_2,

    // Inactive Tab background color.
    "tab.inactiveBackground": base_plus_2,

    // Inactive Tab foreground color in an active group.
    //"tab.inactiveForeground": ,


    /*
     * Editor Colors
     * The most prominent editor colors are the token colors that are based on the language grammar installed. These colors are defined by the Color Theme and can (currently) not be customized in the settings. All other colors are listed here:
     *
     * Selection colors are visible when selecting one or more characters. In addition to the selection also all regions with the same content are highlighted.
     *
     * Word highlight colors are visible when the cursor is inside a symbol or a word. Depending on the language support available for the file type, all matching references and declarations are highlighted and read and write accesses get different colors. If document symbol language support is not available, this falls back to word highlighting.
     *
     * Find colors depend on the current find string in the Find/Replace dialog.
     *
     * The hover highlight is shown behind the symbol for which a hover is shown.
     *
     * The current line is typically shown as either background highlight or a border (not both).
     *
     * The link color is visible when clicking on a link.
     *
     * The range highlight is visible when selecting a search result.
     *
     * To see the editor white spaces, enable **Toggle Render Whitespace**.
     *
     * To see the editor indent guides, set editor.renderIndentGuides": true".
     */

    // Editor background color.
    "editor.background": base,

    // Editor default foreground color.
    //"editor.foreground": ,

    // Color of editor line numbers.
    "editorLineNumber.foreground": base_medium,

    // Color of the editor cursor.
    //"editorCursor.foreground": ,

    // Color of the editor selection.
    //"editor.selectionBackground": ,

    // Color for regions with the same content as the selection.
    //"editor.selectionHighlightBackground": ,

    // Color of the selection in an inactive editor.
    //"editor.inactiveSelectionBackground": ,

    // Background color of a symbol during read-access, for example when reading a variable.
    //"editor.wordHighlightBackground": ,

    // Background color of a symbol during write-access, for example when writing to a variable.
    //"editor.wordHighlightStrongBackground": ,

    // Color of the current search match.
    //"editor.findMatchBackground": ,

    // Color of the other search matches.
    //"editor.findMatchHighlightBackground": ,

    // Color the range limiting the search.
    //"editor.findRangeHighlightBackground": ,

    // Highlight below the word for which a hover is shown.
    //"editor.hoverHighlightBackground": ,

    // Background color for the highlight of line at the cursor position.
    //"editor.lineHighlightBackground": ,

    // Background color for the border around the line at the cursor position.
    //"editor.lineHighlightBorder": ,

    // Color of active links.
    //"editorLink.activeForeground": ,

    // Background color of highlighted ranges, like by Quick Open and Find features.
    //"editor.rangeHighlightBackground": ,

    // Color of whitespace characters in the editor.
    //"editorWhitespace.foreground": ,

    // Color of the editor indentation guides.
    "editorIndentGuide.background": base_plus_6,


    /*
     * Diff Editor Colors
     * For coloring inserted and removed text, use either a background or a border color but not both.
     */

    // Background color for inserted text.
    //"diffEditor.insertedTextBackground": ,

    // Outline color for inserted text.
    //"diffEditor.insertedTextBorder": ,

    // Background color for removed text.
    //"diffEditor.removedTextBackground": ,

    // Outline color for removed text.
    //"diffEditor.removedTextBorder": ,


    /*
     * Editor Widget Colors
     * The Editor widget is shown in front of the editor content. Examples are the Find/Replace dialog, the suggestion widget, and the editor hover.
     *
     * The Debug Exception widget is a peek view that shows in the editor when debug stops at an exception.
     *
     * The editor marker view shows when navigating to errors and warnings in the editor (**Go to Next Error or Warning** command).
     */

    // Background color of editor widgets, such as Find/Replace.
    //"editorWidget.background": ,

    // Background color of the suggestion widget.
    //"editorSuggestWidget.background": ,

    // Border color of the suggestion widget.
    //"editorSuggestWidget.border": ,

    // Foreground color of the suggestion widget.
    //"editorSuggestWidget.foreground": ,

    // Color of the match highlights in the suggestion widget.
    //"editorSuggestWidget.highlightForeground": ,

    // Background color of the selected entry in the suggestion widget.
    //"editorSuggestWidget.selectedBackground": ,

    // Background color of the editor hover.
    //"editorHoverWidget.background": ,

    // Border color of the editor hover.
    //"editorHoverWidget.border": ,

    // Exception widget background color.
    //"debugExceptionWidget.background": ,

    // Exception widget border color.
    //"debugExceptionWidget.border": ,

    // Editor marker navigation widget background.
    //"editorMarkerNavigation.background": ,

    // Editor marker navigation widget error color.
    //"editorMarkerNavigationError.background": ,

    // Editor marker navigation widget warning color.
    //"editorMarkerNavigationWarning.background": ,


    /*
     * Peek View Colors
     */

    // Color of the peek view borders and arrow.
    //"peekView.border": ,

    // Background color of the peek view editor.
    //"peekViewEditor.background": ,

    // Match highlight color in the peek view editor.
    //"peekViewEditor.matchHighlightBackground": ,

    // Background color of the peek view result list.
    //"peekViewResult.background": ,

    // Foreground color for file nodes in the peek view result list.
    //"peekViewResult.fileForeground": ,

    // Foreground color for line nodes in the peek view result list.
    //"peekViewResult.lineForeground": ,

    // Match highlight color in the peek view result list.
    //"peekViewResult.matchHighlightBackground": ,

    // Background color of the selected entry in the peek view result list.
    //"peekViewResult.selectionBackground": ,

    // Foreground color of the selected entry in the peek view result list.
    //"peekViewResult.selectionForeground": ,

    // Background color of the peek view title area.
    //"peekViewTitle.background": ,

    // Color of the peek view title info.
    //"peekViewTitleDescription.foreground": ,

    // Color of the peek view title.
    //"peekViewTitleLabel.foreground": ,


    /*
     * Panel Colors
     * Panels are shown below the editor area and contain views like Output and Integrated Terminal.
     */

    // Panel background color.
    //"panel.background": ,

    // Panel border color on the top separating to the editor.
    //"panel.border": ,

    // Border color for the active panel title.
    //"panelTitle.activeBorder": ,

    // Title color for the active panel.
    //"panelTitle.activeForeground": ,

    // Title color for the inactive panel.
    //"panelTitle.inactiveForeground": ,


    /*
     * Status Bar Colors
     * The Status Bar is shown in the bottom of the workbench.
     */

    // Standard Status Bar background color.
    "statusBar.background": base_minus_2,

    // Status Bar background color when a program is being debugged.
    "statusBar.debuggingBackground": red,

    // Status Bar foreground color.
    //"statusBar.foreground": ,

    // Status Bar background color when no folder is opened. - "statusBarItem.activeBackground": ,Status Bar item background color when clicking.
    //"statusBar.noFolderBackground": ,

    // Status Bar item background color when hovering.
    //"statusBarItem.hoverBackground": ,

    // Status Bar prominent items background color. Prominent items stand out from other Status Bar entries to indicate importance.
    //"statusBarItem.prominentBackground": ,

    // Status Bar prominent items background color when hovering. Prominent items stand out from other Status Bar entries to indicate importance.
    //"statusBarItem.prominentHoverBackground": ,


    /*
     * Title Bar Colors (macOS)
     */

    // Title Bar background when the window is active. Note that this color is currently only supported on macOS.
    "titleBar.activeBackground": base_minus_2,

    // Title Bar foreground when the window is active. Note that this color is currently only supported on macOS.
    //"titleBar.activeForeground": ,

    // Title Bar background when the window is inactive. Note that this color is currently only supported on macOS.
    //"titleBar.inactiveBackground": ,

    // Title Bar foreground when the window is inactive. Note that this color is currently only supported on macOS.
    //"titleBar.inactiveForeground": ,


    /*
     * Notification Dialog Colors
     * Notifications slide in from the top of the workbench.
     */

    // Notifications background color.
    //"notification.background": ,

    // Notifications foreground color.
    //"notification.foreground": ,


    /*
     * Quick Picker
     */

    // Quick picker (Quick Open) color for grouping borders.
    //"pickerGroup.border": ,

    // Quick picker (Quick Open) color for grouping labels.
    //"pickerGroup.foreground": ,


    /*
     * Integrated Terminal Colors
     */

    // 'Black' ANSI color in the terminal.
    //"terminal.ansiBlack": ,

    // 'Blue' ANSI color in the terminal.
    //"terminal.ansiBlue": ,

    // 'BrightBlack' ANSI color in the terminal.
    //"terminal.ansiBrightBlack": ,

    // 'BrightBlue' ANSI color in the terminal.
    //"terminal.ansiBrightBlue": ,

    // 'BrightCyan' ANSI color in the terminal.
    //"terminal.ansiBrightCyan": ,

    // 'BrightGreen' ANSI color in the terminal.
    //"terminal.ansiBrightGreen": ,

    // 'BrightMagenta' ANSI color in the terminal.
    //"terminal.ansiBrightMagenta": ,

    // 'BrightRed' ANSI color in the terminal.
    //"terminal.ansiBrightRed": ,

    // 'BrightWhite' ANSI color in the terminal.
    //"terminal.ansiBrightWhite": ,

    // 'BrightYellow' ANSI color in the terminal.
    //"terminal.ansiBrightYellow": ,

    // 'Cyan' ANSI color in the terminal.
    //"terminal.ansiCyan": ,

    // 'Green' ANSI color in the terminal.
    //"terminal.ansiGreen": ,

    // 'Magenta' ANSI color in the terminal.
    //"terminal.ansiMagenta": ,

    // 'Red' ANSI color in the terminal.
    //"terminal.ansiRed": ,

    // 'White' ANSI color in the terminal.
    //"terminal.ansiWhite": ,

    // 'Yellow' ANSI color in the terminal.
    //"terminal.ansiYellow": ,


    /*
     * Debug
     */

    // Debug toolbar background color.
    //"debugToolBar.background": ,
  };

  return colors;

}
