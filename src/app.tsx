// Import React and ReactDOM
import React from "react"
import { createRoot } from "react-dom/client"

// Import tailwind styles
import "zmp-ui/zaui.css"
import "./css/tailwind.css"

// Import Global Prototype
import "./store/helper/prototypeFunction/__global__"

// Import App Component
import BaseApp from "./baseApp"

// Mount React App
const root = createRoot(document.getElementById("app")!)

root.render(<BaseApp />)
