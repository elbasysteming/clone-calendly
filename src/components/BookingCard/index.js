import React, { useState } from "react";
import { Card, Header, Footer, Body } from "./styles";
import { MdAccessTime } from "../../components/Icons";
import { ToggleSwitch } from "../../components/ToggleSwitch";

export const BookingCard = ({ ...props }) => {
    const [valueToggle, setValueToggle] = useState(false);

    return (
        <Card>
            <Header>
                <h1> {props.title} </h1>
                <ToggleSwitch
                    size="xs"
                    name="status"
                    title={null}
                    value={valueToggle}
                    checked={valueToggle}
                    onChange={() => setValueToggle(!valueToggle)}
                />
            </Header>
            <Body>
                <div>
                    <span>
                        <MdAccessTime size="20px" color="#666666" />
                        {`${props.duration} min`}
                    </span>
                </div>
                <div>{props.description}</div>
                <div>{props.url}</div>
            </Body>
            <Footer>{props.children}</Footer>
        </Card>
    );
};
