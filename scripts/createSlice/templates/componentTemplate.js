const interfaceConst = 'interface';

module.exports = (
    componentName,
) => `import { classnames } from 'shared/lib/classnames';
import { useTranslation } from 'react-i18next';
import cls from './${componentName}.module.scss';
import { memo } from 'react';

${interfaceConst} ${componentName}Props {
    className?: string;
}

export const ${componentName} = memo((props: ${componentName}Props) => {
    const { className } = props;
    const { t } = useTranslation();
    
    return (
        <div className={classnames(cls.${componentName}, [className], {})}>
           
        </div>
    );
});`;
