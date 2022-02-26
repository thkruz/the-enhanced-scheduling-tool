import React, {useState, useContext, useEffect} from "react";
import { SchedulerContext } from "../../../SchedulerContext";
import { RuxButton } from "../../../../node_modules/@astrouxds/react/dist/components";
import styled from "styled-components";

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const AdminRemoveUser = () => {

    const scheduler = useContext(SchedulerContext);

    console.log(scheduler);

    const handleSave = () => {
        console.log(scheduler);

    }

    return (
        <Form>
            <RuxButton data-testid="data-testid-button" onClick={handleSave}>
                Remove User(s)
            </RuxButton>
        </Form>
    )
}

export default AdminRemoveUser;