document.addEventListener('DOMContentLoaded', async () => {
    try {
        const res = await fetch('/dummy/상세정보_다중.json'); // public 제외
        if (!res.ok) throw new Error('Failed to fetch JSON');

        const data = await res.json();

        // data가 배열이라면 바로 넣기
        if (Array.isArray(data)) {
            Alpine.store('map').updateDetailList(data);
        } else {
            // 혹은 적절히 가공해서 넣기
            Alpine.store('map').updateDetailList([data]);
        }
    } catch (error) {
        console.error(error);
    }
});
