import { Navbar, useTheme, Text, Switch, Button, Modal, Input, Checkbox, Row, Container, Loading } from "@nextui-org/react";
import { useTheme as useNextTheme } from 'next-themes';
import { useRouter } from 'next/router';
import Link from "next/link";
import React, { useState } from "react";

const MoonIcon = ({
    fill = "currentColor",
    filled,
    size,
    height,
    width,
    label,
    ...props
}) => {
    if (filled) {
        return (
            <svg
                width={size || width || 24}
                height={size || height || 24}
                viewBox="0 0 24 24"
                {...props}
            >
                <path
                    d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
                    fill={fill}
                />
            </svg>
        );
    }
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size || width || 24}
            height={size || height || 24}
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                fill={fill}
                d="M20.742,13.045c-0.677,0.18-1.376,0.271-2.077,0.271c-2.135,0-4.14-0.83-5.646-2.336c-2.008-2.008-2.799-4.967-2.064-7.723 c0.092-0.345-0.007-0.713-0.259-0.965C10.444,2.04,10.077,1.938,9.73,2.034C8.028,2.489,6.476,3.382,5.241,4.616 c-3.898,3.898-3.898,10.243,0,14.143c1.889,1.889,4.401,2.93,7.072,2.93c2.671,0,5.182-1.04,7.07-2.929 c1.236-1.237,2.13-2.791,2.583-4.491c0.092-0.345-0.008-0.713-0.26-0.965C21.454,13.051,21.085,12.951,20.742,13.045z M17.97,17.346c-1.511,1.511-3.52,2.343-5.656,2.343c-2.137,0-4.146-0.833-5.658-2.344c-3.118-3.119-3.118-8.195,0-11.314 c0.602-0.602,1.298-1.102,2.06-1.483c-0.222,2.885,0.814,5.772,2.89,7.848c2.068,2.069,4.927,3.12,7.848,2.891 C19.072,16.046,18.571,16.743,17.97,17.346z"
            ></path>
        </svg>
    );
};

const SunIcon = ({
    fill = "currentColor",
    filled,
    size,
    height,
    width,
    label,
    ...props
}) => {
    if (filled) {
        return (
            <svg
                width={size || width || 24}
                height={size || height || 24}
                viewBox="0 0 24 24"
                {...props}
            >
                <g fill={fill}>
                    <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
                    <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
                </g>
            </svg>
        );
    }
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size || width || 24}
            height={size || height || 24}
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                fill={fill}
                d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19H12.998V22H10.998zM10.998 2H12.998V5H10.998zM1.998 11H4.998V13H1.998zM18.998 11H21.998V13H18.998z"
            ></path>
            <path
                fill={fill}
                transform="rotate(-45.017 5.986 18.01)"
                d="M4.487 17.01H7.487V19.01H4.487z"
            ></path>
            <path
                fill={fill}
                transform="rotate(-45.001 18.008 5.99)"
                d="M16.508 4.99H19.509V6.99H16.508z"
            ></path>
            <path
                fill={fill}
                transform="rotate(-134.983 5.988 5.99)"
                d="M4.487 4.99H7.487V6.99H4.487z"
            ></path>
            <path
                fill={fill}
                transform="rotate(134.999 18.008 18.01)"
                d="M17.008 16.51H19.008V19.511000000000003H17.008z"
            ></path>
        </svg>
    );
};

const NotificationIcon = ({
    fill = 'currentColor',
    filled,
    size,
    height,
    width,
    label,
    ...props
}) => {
    return (
        <svg
            width={size || width || 24}
            height={size || height || 24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.707 8.796c0 1.256.332 1.997 1.063 2.85.553.628.73 1.435.73 2.31 0 .874-.287 1.704-.863 2.378a4.537 4.537 0 01-2.9 1.413c-1.571.134-3.143.247-4.736.247-1.595 0-3.166-.068-4.737-.247a4.532 4.532 0 01-2.9-1.413 3.616 3.616 0 01-.864-2.378c0-.875.178-1.682.73-2.31.754-.854 1.064-1.594 1.064-2.85V8.37c0-1.682.42-2.781 1.283-3.858C7.861 2.942 9.919 2 11.956 2h.09c2.08 0 4.204.987 5.466 2.625.82 1.054 1.195 2.108 1.195 3.745v.426zM9.074 20.061c0-.504.462-.734.89-.833.5-.106 3.545-.106 4.045 0 .428.099.89.33.89.833-.025.48-.306.904-.695 1.174a3.635 3.635 0 01-1.713.731 3.795 3.795 0 01-1.008 0 3.618 3.618 0 01-1.714-.732c-.39-.269-.67-.694-.695-1.173z"
                fill={fill}
            />
        </svg>
    );
};

const NavBar = () => {
    const { setTheme } = useNextTheme();
    const { isDark } = useTheme();
    const router = useRouter();
    const [input, setInput] = useState('');
    const [msg, setMsg] = useState('');
    const [msgVis, setMsgVis] = useState(false);
    const [loading, setLoading] = useState(false);

    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setLoading(true);
        // send mail
        let testRequest = new Request('/api/send_mail', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json;charset=utf-8;'
            },
            body: JSON.stringify({ "to": input })
        })
        fetch(testRequest).then((res) => {
            res.text().then(res => {
                setMsg(JSON.parse(res).msg);
                setMsgVis(true);
                setLoading(false);
                setTimeout(() => {
                    setMsgVis(false);
                    setMsg('');
                    setVisible(false);
                    setInput('')
                }, 2000);
            });
        })
    };

    return (
        <>
            <Navbar isBordered variant={"sticky"}>
                <Navbar.Brand>
                    <Text b color="inherit" hideIn="xs">
                        Occupation Capacity Anaylze
                    </Text>
                </Navbar.Brand>
                <Navbar.Content hideIn="xs" variant="highlight-rounded">
                    <Navbar.Link isActive={router.asPath == "/"} as={Link} href="/">Salary</Navbar.Link>
                    <Navbar.Link isActive={router.asPath == "/city_salary"} as={Link} href="/city_salary">City-Salary</Navbar.Link>
                    <Navbar.Link isActive={router.asPath == "/hot_company"} as={Link} href="/hot_company">Hot-Company</Navbar.Link>
                    <Navbar.Link isActive={router.asPath == "/hot_job_city"} as={Link} href="/hot_job_city">Hot-Job</Navbar.Link>
                    <Navbar.Link isActive={router.asPath == "/other"} as={Link} href="/other">
                        Other
                    </Navbar.Link>
                </Navbar.Content>
                <Navbar.Content>
                    <Navbar.Item>
                        <Switch shadow checked={isDark} onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')} size="xl" iconOff={<SunIcon filled />} iconOn={<MoonIcon filled />} />
                    </Navbar.Item>
                    <Navbar.Item>
                        <Text b color="inherit" hideIn="xs">{isDark ? "Dark Mode" : "Light Mode"}</Text>
                    </Navbar.Item>
                    <Button shadow icon={<NotificationIcon fill="currentColor" />} auto onPress={handler}>
                        Job Push
                    </Button>
                </Navbar.Content>
            </Navbar>

            <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Welcome to
                        <Text b size={18}>
                            OC APP
                        </Text>
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Input
                                clearable
                                bordered
                                fullWidth
                                color="primary"
                                size="lg"
                                placeholder="Your Email"
                                contentLeft={<NotificationIcon fill="currentColor" />}
                                value={input}
                                onInput={e => setInput(e.target.value)}
                            />
                        </Row>
                        <Row justify="center">
                            <Text css={{ visibility: msgVis }}>{msg}</Text>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto onPress={closeHandler}>
                        {!loading ? <>Send Mail</> : <Loading type="points-opacity" color="currentColor" size="sm" />}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NavBar;