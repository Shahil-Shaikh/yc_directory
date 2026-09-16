import React from 'react'
import Form from 'next/form'

function compo() {
  return (
    <div>


      <Form action="/search">
        {/* On submission, the input value will be appended to
          the URL, e.g. /search?query=abc */}
        <input name="query" />
        <button type="submit">Submit</button>
      </Form>

    </div>
  )
}

export default compo
