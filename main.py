def read_symbols(lines):
    """Splits 3 lines of input into 3x3 symbols"""
    n = len(lines[0]) 
    symbols = []
    for i in range(n):
        part = [line[i*3:(i+1)*3] for line in lines]
        symbols.append(tuple(part))
    return symbols

def to_binary(pattern):
    """Converts a 3x3 pattern to 9-bit binary string (1=ON, 0=OFF)"""
    bits = ''
    for row in pattern:
        for ch in row:
            bits += '1' if ch != ' ' else '0'
    return bits

def evaluate(expr, binary_map):
    """Evaluates bitwise expression with precedence"""
    def get_val(token):
        if token.isdigit():
            b = ''.join(binary_map[d] for d in token)
            return int(b, 2)
        return token

    # Replace numbers with evaluated integers
    import re
    tokens = re.findall(r'\d+|[()!&|]', expr)
    stack = []
    for t in tokens:
        if t in ('!', '(', ')', '&', '|'):
            stack.append(t)
        else:
            stack.append(str(get_val(t)))

    expr_str = ''.join(stack)
    expr_str = expr_str.replace('&&', '&').replace('||', '|').replace('!', '~')
    result = eval(expr_str)
    return abs(result)
digits_lines = [input() for _ in range(3)]
ops_lines = [input() for _ in range(3)]
expr_lines = [input() for _ in range(3)]

# Extract digit symbols
digit_syms = read_symbols(digits_lines)
ops_syms = read_symbols(ops_lines)
expr_syms = read_symbols(expr_lines)

# Map digits 0-9
pattern_map = {}
for i, sym in enumerate(digit_syms):
    pattern_map[sym] = str(i)

# Map operators (||, &&, !, (, ))
ops_list = ['||', '&&', '!', '(', ')']
for i, sym in enumerate(ops_syms):
    pattern_map[sym] = ops_list[i]

# Decode expression
decoded_expr = ''.join(pattern_map[s] for s in expr_syms)

# Map digits to binary (from their 3x3 representation)
binary_map = {}
for sym, digit in pattern_map.items():
    if digit.isdigit():
        binary_map[digit] = to_binary(sym)

# Evaluate
result = evaluate(decoded_expr, binary_map)
print(result)