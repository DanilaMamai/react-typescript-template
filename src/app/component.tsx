import React from "react";

import { BaseProps } from "@/shared/types";

const Test = (props: BaseProps) => (<div>{props.children}</div>)

export const App = () => <Test>REACT</Test>;