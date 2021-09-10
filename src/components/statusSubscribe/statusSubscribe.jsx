import React from "react";
import './statusSubscribe.scss'

function StatusSubscribe({ message}) {
  return (
    <section className="subscribe">
      <h2>{ message } </h2>
      <hr/>
    </section>
  )
}

export default StatusSubscribe;
