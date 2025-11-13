import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

type SpringType = typeof import('@react-spring/web');
type GestureType = typeof import('@use-gesture/react');

interface AnimationContextPayload {
    Gesture?: GestureType;
    Spring?: SpringType;
    isLoaded?: boolean;
}

// шаг 1 - создали контекст(стандартный инстументарий реакта)
const AnimationContext = createContext<AnimationContextPayload>({});

// Обе либы зависят друг от друга
const getAsyncAnimationModules = async () =>
    Promise.all([import('@react-spring/web'), import('@use-gesture/react')]);

export const useAnimationLibs = () =>
    // шаг 3 - удобный хук для использования внутри приложения
    // eslint-disable-next-line implicit-arrow-linebreak
    useContext(AnimationContext) as Required<AnimationContextPayload>;

// шаг 2 -  создали провайдер, которым будем оборачивать ту часть приложения, в которую хотим пробросить данные
export const AnimationProvider = ({ children }: { children: ReactNode }) => {
    const SpringRef = useRef<SpringType>();
    const GestureRef = useRef<GestureType>();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getAsyncAnimationModules().then(([Spring, Gesture]) => {
            SpringRef.current = Spring;
            GestureRef.current = Gesture;
            setIsLoaded(true);
        });
    }, []);

    const value = useMemo(
        () => ({
            Gesture: GestureRef.current,
            Spring: SpringRef.current,
            isLoaded,
        }),
        [isLoaded],
    );

    return (
        <AnimationContext.Provider value={value}>
            {children}
        </AnimationContext.Provider>
    );
};
