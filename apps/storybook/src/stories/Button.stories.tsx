import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@openplan/ui";

const meta = {
  title: "OpenPlan/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["contained", "outlined"],
      description: "Button의 스타일 variant",
      table: {
        defaultValue: { summary: "contained" },
      },
    },
    size: {
      control: "select",
      options: ["medium"],
      description: "Button의 크기",
      table: {
        defaultValue: { summary: "medium" },
      },
    },
    color: {
      control: "select",
      options: ["primary"],
      description: "Button의 색상",
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    children: {
      control: "text",
      description: "Button 내용",
    },
  },
  args: {
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// ===== Contained Variants =====
export const ContainedDefault: Story = {
  args: {
    variant: "contained",
    children: "다음",
  },
  parameters: {
    docs: {
      description: {
        story:
          "기본 Contained 버튼입니다. 배경색이 #111111이고 텍스트는 흰색입니다.",
      },
    },
  },
};

export const ContainedHover: Story = {
  args: {
    variant: "contained",
    children: "Hover Me",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Hover 또는 Active(Pressed) 상태에서 opacity가 80%로 변경됩니다.",
      },
    },
  },
};

// ===== Outlined Variants =====
export const OutlinedDefault: Story = {
  args: {
    variant: "outlined",
    children: "Outlined Button",
  },
  parameters: {
    docs: {
      description: {
        story: "Outlined 버튼입니다. 투명 배경에 #111111 테두리가 있습니다.",
      },
    },
  },
};

export const OutlinedHover: Story = {
  args: {
    variant: "outlined",
    children: "Hover Me",
  },
  parameters: {
    docs: {
      description: {
        story: "Hover 또는 Active 상태에서 opacity가 80%로 변경됩니다.",
      },
    },
  },
};

// ===== Size Variants =====
export const SizeMedium: Story = {
  args: {
    variant: "contained",
    size: "medium",
    children: "Medium Button",
  },
  parameters: {
    docs: {
      description: {
        story: "중간 크기의 버튼입니다 (기본값).",
      },
    },
  },
};

// ===== All States Showcase =====
export const AllStates: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        padding: "2rem",
      }}
    >
      {/* Contained */}
      <div>
        <h3
          style={{ marginBottom: "1rem", fontSize: "18px", fontWeight: "bold" }}
        >
          Contained
        </h3>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Button variant="contained">Normal</Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
        </div>
      </div>

      {/* Outlined */}
      <div>
        <h3
          style={{ marginBottom: "1rem", fontSize: "18px", fontWeight: "bold" }}
        >
          Outlined
        </h3>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Button variant="outlined">Normal</Button>
          <Button variant="outlined" disabled>
            Disabled
          </Button>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3
          style={{ marginBottom: "1rem", fontSize: "18px", fontWeight: "bold" }}
        >
          Sizes
        </h3>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Button variant="contained" size="medium">
            Medium
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "모든 버튼 상태를 한눈에 확인할 수 있습니다.",
      },
    },
  },
};
