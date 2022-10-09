import React from 'react';
import '../../styles/Users.scss';
import { ReactComponent as State1 } from "../../assets/userStateIcons/stateicon1.svg";

interface Istates {
  stateTitle: string;
  pop: number| string;

}

const SingleUser = ({stateTitle, pop}:Istates) => {
  return (
    <>
    <div className="singleState">
                <State1/>
                <h5 className="text">
                    {stateTitle}
                </h5>
                <h3 className="pop">{pop}</h3>
            </div>
    </>
  )
}

export default SingleUser
