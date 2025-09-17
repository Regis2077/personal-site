# Sistema de Tema Global

Este projeto implementa um sistema de tema global que permite alternar entre modo claro e escuro em todos os componentes da aplicação.

## Como Funciona

O sistema utiliza o React Context API para gerenciar o estado do tema globalmente. O `ThemeProvider` envolve toda a aplicação no `layout.tsx` e fornece o contexto do tema para todos os componentes filhos.

## Componentes Principais

### 1. ThemeProvider (`src/app/context/themeProvider.tsx`)
- Gerencia o estado global do tema
- Detecta preferência do usuário (localStorage + prefers-color-scheme)
- Aplica o tema ao documento HTML
- Fornece hooks para uso em outros componentes

### 2. ThemeToggleButton (`src/Components/ThemeToggleButton/index.tsx`)
- Botão para alternar entre temas
- Usa o contexto global em vez de estado local
- Exibe ícone baseado no tema atual (🌞/🌙)

## Como Usar em Outros Componentes

### Opção 1: Hook useTheme()
```tsx
import { useTheme } from "@/app/context/themeProvider";

function MeuComponente() {
  const { theme, toggleTheme, isDark, isLight } = useTheme();
  
  return (
    <div style={{ 
      backgroundColor: theme === "dark" ? "#1a1a1a" : "#ffffff",
      color: theme === "dark" ? "#ffffff" : "#000000"
    }}>
      <p>Tema atual: {theme}</p>
      <button onClick={toggleTheme}>Alternar Tema</button>
    </div>
  );
}
```

### Opção 2: Hook useThemeColors() (Recomendado)
```tsx
import { useThemeColors } from "@/app/context/themeProvider";

function MeuComponente() {
  const colors = useThemeColors();
  
  return (
    <div style={{ 
      backgroundColor: colors.backgroundColor,
      color: colors.textColor,
      border: `1px solid ${colors.borderColor}`
    }}>
      <h1 style={{ color: colors.primaryColor }}>Título</h1>
      <p style={{ color: colors.secondaryColor }}>Texto secundário</p>
    </div>
  );
}
```

## Cores Disponíveis

O hook `useThemeColors()` fornece as seguintes cores:

- `backgroundColor`: Fundo principal
- `textColor`: Cor do texto principal
- `primaryColor`: Cor primária (azul)
- `secondaryColor`: Cor secundária (cinza)
- `borderColor`: Cor das bordas

## CSS Global

O arquivo `globals.scss` define variáveis CSS que são atualizadas automaticamente:

```scss
:root {
  --bg-color: #ffffff;
  --text-color: #000000;
  --transition-duration: 0.3s;
} 

html[data-theme="dark"] {
  --bg-color: #1a1a1a;
  --text-color: #f5f5f5;
}
```

## Vantagens do Sistema Global

1. **Consistência**: Todos os componentes usam o mesmo tema
2. **Performance**: Estado centralizado, sem re-renders desnecessários
3. **Persistência**: Tema salvo no localStorage
4. **Acessibilidade**: Respeita preferência do sistema do usuário
5. **Flexibilidade**: Múltiplas formas de usar (hooks, CSS variables)

## Exemplo Completo

Veja o componente `ThemeExample` em `src/Components/ThemeExample/index.tsx` para um exemplo completo de como usar todos os recursos do sistema de tema. 