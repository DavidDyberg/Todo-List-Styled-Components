import styled from "styled-components";

export const TodoContainer = styled.div`
    text-align: center;
    height: 100%;
`

export const TodoList = styled.div `
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Form = styled.form `
    display: flex;
    border: 3px solid #30313D;
    border-radius: 10px;
    max-width: 400px;
    height: 40px;
    
    
    form {
        width: 500px;
        display: flex;
        align-items: center;
    }
    
    input {
        background: none;
        border: 0;
        width: 100%;
        padding: 0 8px;
        display: block;
        color: white;
        height: 40px;
        border-radius: 10px;
        font-size: 20px;
    }

    button {
        background-color: #61DAFB;
        border: 0;
        border-radius: 4px;
        cursor: pointer;
        width: 40px;

        &:hover {
            opacity: 0.8;
        }
    }

    @media screen and (max-width: 500px) {
        width: 350px;
    }
`

export const Tasks = styled.div`
    width: 300px;
    

    .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 5px;
        border-radius: 10px;
        height: 40px;
        background-color: #30313D;
    }

    button {
        height: 30px;
        width: 30px;
        background-color: #61DAFB;
        border: 0;
        border-radius: 4px;
        margin-right: 5px;
        cursor: pointer;

        &:hover {
            opacity: 0.8;
        }
    }

    .todo-text {
        text-transform: capitalize;
        margin-left: 5px;
    }
`