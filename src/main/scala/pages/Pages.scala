package pages

import org.scalajs.dom._
import org.scalajs.dom.ext._
import org.scalajs.dom.raw.{HTMLElement, HTMLInputElement}

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

    def search = {
        val ins = document.querySelectorAll("input.search-in").map(_ match {
            case in:HTMLInputElement => in
        })

        val outs = document.querySelectorAll("input.search-out").map(_ match {
            case out:HTMLInputElement => out
        })

        ins.map(in => {
            in.addEventListener("change", {e:Event => {
                val in_key = in.value
                val out_key = s"site:haslab.org ${in.value}"
                ins.map(_.value = in_key)
                outs.map(_.value = out_key)
            }})
        })
    }

    def main(args: Array[String]):Unit = {
        navbar
        search
    }
}