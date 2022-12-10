/**
 * @license Copyright (c) 2014-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat.js";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold.js";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic.js";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough.js";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline.js";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote.js";
import CodeBlock from "@ckeditor/ckeditor5-code-block/src/codeblock.js";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor.js";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials.js";
import Heading from "@ckeditor/ckeditor5-heading/src/heading.js";
import HtmlEmbed from "@ckeditor/ckeditor5-html-embed/src/htmlembed.js";
import AutoImage from "@ckeditor/ckeditor5-image/src/autoimage.js";
import Image from "@ckeditor/ckeditor5-image/src/image.js";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption.js";
import ImageInsert from "@ckeditor/ckeditor5-image/src/imageinsert.js";
import ImageTextAlternative from "@ckeditor/ckeditor5-image/src/imagetextalternative";
import imageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload.js";
import Indent from "@ckeditor/ckeditor5-indent/src/indent.js";
import Link from "@ckeditor/ckeditor5-link/src/link.js";
import List from "@ckeditor/ckeditor5-list/src/list.js";
import ListProperties from "@ckeditor/ckeditor5-list/src/listproperties";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph.js";
import Table from "@ckeditor/ckeditor5-table/src/table.js";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar.js";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation.js";
import SimpleUploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter.js";

class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
  CodeBlock,
  Autoformat,
  AutoImage,
  BlockQuote,
  Bold,
  Essentials,
  Heading,
  HtmlEmbed,
  Image,
  imageToolbar,
  ImageCaption,
  ImageTextAlternative,
  ImageInsert,
  ImageUpload,
  Indent,
  Italic,
  Link,
  List,
  ListProperties,
  Paragraph,
  SimpleUploadAdapter,
  Strikethrough,
  Table,
  TableToolbar,
  TextTransformation,
  Underline,
];

Editor.defaultConfig = {
  toolbar: {
    items: [
      "heading",
      "|",
      "bold",
      "italic",
      "link",
      "bulletedList",
      "numberedList",
      "codeBlock",
      "strikethrough",
      "underline",
      "|",
      "outdent",
      "indent",
      "|",
      "imageUpload",
      "imageInsert",
      "blockQuote",
      "insertTable",
      "undo",
      "redo",
      "|",
      "htmlEmbed",
    ],
  },
  language: "en",
  image: {
    toolbar: ["toggleImageCaption", "imageTextAlternative"],
  },
  table: {
    contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
  },
  codeBlock: {
    languages: [
      { language: "plaintext", label: "Plain text" }, // The default language.
      { language: "c", label: "C" },
      { language: "cs", label: "C#" },
      { language: "cpp", label: "C++" },
      { language: "css", label: "CSS" },
      { language: "diff", label: "Diff" },
      { language: "html", label: "HTML" },
      { language: "java", label: "Java" },
      { language: "javascript", label: "JavaScript" },
      { language: "php", label: "PHP" },
      { language: "python", label: "Python" },
      { language: "ruby", label: "Ruby" },
      { language: "typescript", label: "TypeScript" },
    ],
  },
};
export default Editor;
