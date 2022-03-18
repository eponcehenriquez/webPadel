import css from 'styled-jsx/css'


export const HeaderStyle = css`
.header {
    height: 60px;
    border-bottom: 1px solid rgba(229,231,235, 1);
    display: flex;
    align-items: center;
    padding-left: 40px;
    padding-right: 40px;
    color: black;
    background-color: white;
}

.header h3 {
    font-weight: normal;
    font-size: 22px;
    margin-left: 20px;
}

.today {
    margin-left: 40px;
    padding: 8px 30px;
    border: 1px solid rgba(229,231,235, 1);
    border-radius: 5px; 
    cursor: pointer;
}
`


export const Body = css`
.body {
    display: flex;
    background-color: white;
}
`


export const Sidebar = css`
.sidebar {
    flex: 0.2;
    height: calc(100vh - 60px);
    border-top: 1px solid rgba(229,231,235, 1);
    border-right: 1px solid rgba(229,231,235, 1);
    min-width: 250px;
}

@media(max-width: 1000px) {
    .sidebar {
        display: none;
    }
}
`