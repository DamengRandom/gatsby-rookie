import React, { useState, useEffect } from "react"
import { Helmet }  from "react-helmet"
// real exmaple for fetch API data
const useFecth = url => {
  // wrap useEffect with a customized hook as a 'Wrapper'
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(async () => {
    const response = await fetch(url)
    const data = await response.json()
    const item = data.results[0]
    setData(item)
    setLoading(false)
  }, [])
  return { data, loading }
}

export default () => {
  const [count, updateCount] = useState(0)
  const { data, loading } = useFecth(`https://api.randomuser.me/`)

  // run as many time as possible
  // useEffect(() => {
  //   document.title = `You have clicked ${count} times`
  // })

  // only run once
  // useEffect(() => {
  //   document.title = `You have clicked ${count} times`
  // }, [])

  // only get called when `count` value changes or updates
  useEffect(() => {
    document.title = `You have clicked ${count} times`
  }, [count])

  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <title>Use Effect Demo</title>
        <meta name="description" content="Use effect demo" />
        <meta name="keywords" content="React, useEffect, Hooks" />
        <meta name="author" content="Dameng" />
      </Helmet>
      <h4>Use Effect Demo</h4>
      <p>You have clicked {count} times</p>
      <button onClick={() => updateCount(count + 1)}>Increase</button>
      {loading ? <div>{data && data.name && data.name.first}</div> : <p>loading ..</p>}
      {console.log(data)}
    </div>
  )
}
