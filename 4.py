import sys

def getMax(arr,n,u,v):
    tmax,tsum,maxi = 0,0,0
    length = n + (v-u)
    for i in range(length):
        tsum += arr[i%n]
        if i >= (v-u):
            tsum -= arr[i-v+u]
        if tmax < tsum:
            tmax = tsum
            maxi = i
    return u + maxi

if __name__ == "__main__":
    # 读取第一行的n
    n = int(sys.stdin.readline().strip())
    # 读取每一行
    line = sys.stdin.readline().strip()
    a = list(map(int, line.split()))
    line = sys.stdin.readline().strip()
    u,v = list(map(int, line.split()))
    print(a,n,u,v)
    print(getMax(a,n,u,v))

