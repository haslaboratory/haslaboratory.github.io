package pages

import org.scalajs.dom._
import org.scalajs.dom.ext._
import org.scalajs.dom.raw.HTMLElement

object Pages {
    def navbar = {
        document.addEventListener("DOMContentLoaded", {e:Event => {
            // Get all "navbar-burger" elements
            val $navbarBurgers = document.querySelectorAll(".navbar-burger").asInstanceOf[NodeListOf[HTMLElement]]

            // Add a click event on each of them
            for (i <- 0 until $navbarBurgers.length) {
                val el = $navbarBurgers(i)
                el.addEventListener("click", {e:Event => {
                    // Get the target from the "data-target" attribute
                    val $target = document.getElementById(el.dataset("target"))

                    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                    el.classList.toggle("is-active")
                    $target.classList.toggle("is-active")
                }})
            }
        }})
    }

    def main(args: Array[String]):Unit = {
        navbar
        println("pages!!!")
    }
}