import React from "react"
import { Field, Formik, Form } from "formik"

class SimpleForm extends React.Component {
  constructor(props) {
    super(props)
    const windowGlobal = typeof window !== "undefined" && window
    console.log("localstroage: ", windowGlobal.localStorage)
    this.state = {
      username: windowGlobal.localStorage.getItem("username")
        ? windowGlobal.localStorage.getItem("username")
        : "",
      password: windowGlobal.localStorage.getItem("password")
        ? windowGlobal.localStorage.getItem("password")
        : "",
    }
  }

  render() {
    const windowGlobal = typeof window !== "undefined" && window
    return (
      <>
        <Formik
          onSubmit={values => {
            console.log("submit values", values)
          }}
        >
          {props => (
            <Form style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="username">Username</label>
              <Field
                type="text"
                id="username"
                name="username"
                onChange={event =>
                  this.setState({ username: event.target.value })
                }
                onBlur={event => {
                  windowGlobal.localStorage.setItem(
                    "username",
                    event.target.value
                  )
                }}
                // defaultValue={
                //   windowGlobal.localStorage.getItem("username") !== "" ||
                //   (windowGlobal.localStorage.getItem("username") &&
                //     windowGlobal.localStorage.getItem("username"))
                // }
                value={this.state.username}
              />
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                onChange={event => {
                  console.log("current", event.target.value)
                  this.setState({ password: event.target.value })
                }}
                onBlur={event => {
                  windowGlobal.localStorage.setItem(
                    "password",
                    event.target.value
                  )
                }}
                value={this.state.password}
              />
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
        {JSON.stringify(this.state)}
      </>
    )
  }
}

export default SimpleForm
