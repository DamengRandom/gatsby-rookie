import React from "react"
import { Field, Formik, Form } from "formik"

class SimpleForm extends React.Component {
  constructor(props) {
    super(props)
    if (typeof window !== "undefined") {
      this.state = {
        username:
          localStorage && localStorage.getItem("username")
            ? localStorage.getItem("username")
            : "",
        password:
          localStorage && localStorage.getItem("password")
            ? localStorage.getItem("password")
            : "",
      }
    } else {
      this.state = {
        username: "",
        password: "",
      }
    }
  }

  render() {
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
                  if (localStorage) {
                    localStorage.setItem("username", event.target.value)
                  }
                }}
                // defaultValue={
                //   localStorage.getItem("username") !== "" ||
                //   (localStorage.getItem("username") &&
                //     localStorage.getItem("username"))
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
                  if (localStorage) {
                    localStorage.setItem("password", event.target.value)
                  }
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
