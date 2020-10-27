lazy val pages = project.in(file(".")).
  settings(
    name := "pages",
    scalaVersion := "2.12.10",
    scalaJSUseMainModuleInitializer := true,
    mainClass in Compile := Some("pages.Pages"),
    libraryDependencies ++= Seq (
      "com.github.japgolly.scalajs-react" %%% "core" % "1.6.0",
      "com.github.japgolly.scalajs-react" %%% "extra" % "1.6.0",
      "org.scala-js" %%% "scalajs-dom" % "1.0.0",
    ),
    dependencyOverrides += "org.webjars.npm" % "js-tokens" % "3.0.2",
    npmDependencies in Compile ++= Seq(
      "bulma" -> "0.8.2",
      "font-awesome" -> "4.7.0",
      "react" -> "16.7.0",
      "react-dom" -> "16.7.0"
    )
  ).
  enablePlugins(ScalaJSPlugin, ScalaJSBundlerPlugin)
