/**
 * @prettier
 */
import React from "react"

import { schema } from "../../prop-types"
import { useFn, useComponent } from "../../hooks"

const UnevaluatedItems = ({ schema }) => {
  const fn = useFn()

  if (!fn.hasKeyword(schema, "unevaluatedItems")) return null

  const { unevaluatedItems } = schema
  const JSONSchema = useComponent("JSONSchema")
  const name = (
    <span className="json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary">
      Unevaluated items
    </span>
  )

  return (
    <div className="json-schema-2020-12-keyword json-schema-2020-12-keyword--unevaluatedItems">
      <JSONSchema name={name} schema={unevaluatedItems} />
    </div>
  )
}

UnevaluatedItems.propTypes = {
  schema: schema.isRequired,
}

export default UnevaluatedItems
