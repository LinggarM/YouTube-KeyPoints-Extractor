(function () {
    const STORAGE_KEY = 'youtubeKeyPointsLanguage';
    const translations = {
        'Navigasi utama': 'Main navigation',
        'Bahasa aplikasi': 'Application language',
        'Riwayat Lokal': 'Local History',
        '🕘 Riwayat Lokal': '🕘 Local History',
        'Kembali ke Extractor': 'Back to Extractor',
        '← Kembali ke Extractor': '← Back to Extractor',
        'Hasil Kustom': 'Custom Result',
        'Database SQLite aplikasi': 'Application SQLite database',
        'Temukan kembali transkrip dan key points yang pernah dibuat. Riwayat tersimpan di database aplikasi agar tetap tersedia setelah browser ditutup.':
            'Find transcripts and key points you have created. History is saved in the application database and remains available after you close the browser.',
        'Riwayat Lokal - YouTube KeyPoints Extractor': 'Local History - YouTube KeyPoints Extractor',
        'TRANSKRIP & RINGKASAN VIDEO': 'VIDEO TRANSCRIPTS & SUMMARIES',
        'Ekstrak subtitle dari video YouTube, lalu susun menjadi ringkasan dan poin-poin penting.':
            'Extract subtitles from YouTube videos, then organize them into summaries and key points.',
        'Masukkan URL YouTube di sini...': 'Enter YouTube URL here...',
        'Periksa Bahasa': 'Check Languages',
        'Contoh: https://www.youtube.com/watch?v=dQw4w9WgXcQ':
            'Example: https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        '🌐 Bahasa Subtitle yang Tersedia:': '🌐 Available Subtitle Languages:',
        'Ekstrak Subtitle': 'Extract Subtitles',
        'Ekspor transkrip dan poin-poin penting': 'Export transcript and key points',
        'Ekspor TXT': 'Export TXT',
        'Ekspor Markdown': 'Export Markdown',
        '📝 Transkrip': '📝 Transcript',
        'Salin Transkrip': 'Copy Transcript',
        'Pilih Model AI:': 'Choose AI Model:',
        'Bahasa Output:': 'Output Language:',
        'Format output:': 'Output format:',
        'Rangkum': 'Summarize',
        'Ringkasan Eksekutif': 'Executive Summary',
        'Poin-Poin Penting (Bullet points)': 'Key Points (Bullet points)',
        'Tanya Jawab (Q&A)': 'Questions & Answers (Q&A)',
        'Action Items / Langkah Selanjutnya': 'Action Items / Next Steps',
        'Tulis prompt sendiri': 'Write your own prompt',
        'Instruksi prompt kustom:': 'Custom prompt instructions:',
        'Contoh: Buat tabel berisi istilah penting, definisi, dan contoh yang disebutkan dalam transkrip.':
            'Example: Create a table of important terms, definitions, and examples mentioned in the transcript.',
        'Jelaskan bentuk dan fokus hasil yang diinginkan. Bahasa keluaran mengikuti pilihan di atas (maks. 2000 karakter).':
            'Describe the desired format and focus. The output language follows the selection above (max. 2000 characters).',
        'Aktifkan pemecahan teks (Chunking) untuk video panjang':
            'Enable text chunking for long videos',
        '✨ Buat Output': '✨ Generate Output',
        '🔑 Poin-Poin Penting': '🔑 Key Points',
        'Copy Hasil': 'Copy Result',
        'Extracting subtitles...': 'Extracting subtitles...',
        '☀️ Mode terang': '☀️ Light mode',
        '🌙 Mode gelap': '🌙 Dark mode',
        'Aktifkan mode terang': 'Enable light mode',
        'Aktifkan mode gelap': 'Enable dark mode',
        '✨ Hasil Kustom': '✨ Custom Result',
        'Dibuat otomatis': 'Auto-generated',
        'Dapat diterjemahkan': 'Translatable',
        'Transkrip': 'Transcript',
        'Bahasa:': 'Language:',
        'Judul': 'Title',
        'Kanal': 'Channel',
        'Groq - GPT-OSS 20B (Lebih cepat)': 'Groq - GPT-OSS 20B (Faster)',
        'Groq - GPT-OSS 120B (Lebih mampu)': 'Groq - GPT-OSS 120B (More Capable)',
        'Google AI Studio - Gemini 3.1 Pro (Pratinjau)':
            'Google AI Studio - Gemini 3.1 Pro (Preview)',
        'Masukkan URL YouTube': 'Please enter a YouTube URL',
        'Memeriksa bahasa yang tersedia...': 'Checking available languages...',
        'Bahasa berhasil dimuat!': 'Available languages loaded successfully!',
        'Bahasa yang tersedia tidak dapat diambil': 'Could not retrieve available languages',
        'Pilih bahasa terlebih dahulu': 'Please select a language first',
        'Subtitle berhasil diekstrak!': 'Subtitles extracted successfully!',
        'Ekstrak subtitle terlebih dahulu': 'Please extract subtitles first',
        'Masukkan prompt kustom Anda.': 'Please enter your custom prompt.',
        'Membuat output (mode chunking)...': 'Generating output (Chunking mode)...',
        'Membuat output...': 'Generating output...',
        'Output berhasil dibuat!': 'Output generated successfully!',
        'Key points tidak dapat dibuat': 'Could not generate key points',
        'Kesalahan jaringan: ': 'Network error: ',
        'Transkrip berhasil dibuat, tetapi tidak dapat disimpan ke riwayat SQLite. Pastikan server dapat menulis ke database.':
            'Transcript extracted, but could not save it to SQLite history. Check that the server can write to its database.',
        'Key points berhasil dibuat, tetapi tidak dapat memperbarui riwayat SQLite. Pastikan server dapat menulis ke database.':
            'Key points generated, but could not update SQLite history. Check that the server can write to its database.',
        'Terjadi kesalahan': 'An error occurred',
        'Key points have not been generated yet.': 'Key points have not been generated yet.',
        'Transkrip berhasil disalin!': 'Transcript copied to clipboard!',
        'Key points berhasil disalin!': 'Key points copied to clipboard!',
        'Gagal menyalin transkrip': 'Failed to copy transcript',
        'Gagal menyalin key points': 'Failed to copy key points',
        'Berhasil!': 'Success!',
        'Terjadi kesalahan!': 'Error!',
        'video': 'video',
        'Cari judul, channel, video, bahasa, transkrip, atau key points...':
            'Search titles, channels, videos, languages, transcripts, or key points...',
        'Filter bahasa...': 'Filter language...',
        'Filter bahasa': 'Filter language',
        'Filter status key points': 'Filter key point status',
        'Filter riwayat': 'Filter history',
        'Semua status': 'All statuses',
        'Key points tersedia': 'Key points available',
        'Transkrip saja': 'Transcript only',
        'Dari tanggal': 'From date',
        'Sampai tanggal': 'To date',
        'Jumlah riwayat per halaman': 'History entries per page',
        '10 per halaman': '10 per page',
        '20 per halaman': '20 per page',
        '50 per halaman': '50 per page',
        'Halaman riwayat': 'History pagination',
        'Navigasi detail riwayat': 'History detail navigation',
        '← Sebelumnya': '← Previous',
        'Berikutnya →': 'Next →',
        'Belum ada riwayat': 'No history yet',
        'Ekstrak transkrip dari halaman utama, dan hasilnya akan tersimpan di SQLite.':
            'Extract a transcript from the main page and it will be saved to SQLite.',
        'Riwayat tidak dapat dibaca': 'History could not be read',
        '← Kembali ke riwayat': '← Back to history',
        'Riwayat sebelumnya': 'Previous history entry',
        'Riwayat selanjutnya': 'Next history entry',
        'Selanjutnya →': 'Next →',
        '🗑 Hapus': '🗑 Delete',
        '🔑 Key Points': '🔑 Key Points',
        'Data riwayat di browser tidak memiliki format yang valid.':
            'Browser history data has an invalid format.',
        'Tidak dapat terhubung ke server untuk membaca SQLite.':
            'Could not connect to the server to read SQLite.',
        'Permintaan riwayat ke SQLite gagal.': 'SQLite history request failed.',
        'SQLite tidak tersedia.': 'SQLite is unavailable.',
        'Data riwayat tidak diubah.': 'History data was not changed.',
        'Tanggal tidak tersedia': 'Date unavailable',
        'Menampilkan ': 'Showing ',
        ' dari ': ' of ',
        ' video': ' videos',
        '0 video': '0 videos',
        'Tidak ada hasil yang cocok': 'No matching results',
        'Coba kata kunci lain, atau hapus teks pencarian.':
            'Try another search term or clear the search text.',
        'Halaman ': 'Page ',
        'Untitled video': 'Untitled video',
        'Transkrip tidak tersedia.': 'Transcript unavailable.',
        'Buka & baca': 'Open & read',
        'Kanal:': 'Channel:',
        ' · Bahasa: ': ' · Language: ',
        ' · Disimpan ': ' · Saved ',
        'Key points belum dibuat untuk video ini.': 'Key points have not been created for this video.',
        'Hapus riwayat ini?': 'Delete this history entry?',
        '” akan dihapus dari database SQLite.': '” will be deleted from the SQLite database.',
        'Ya, hapus': 'Yes, delete',
        'Batal': 'Cancel',
        'Terhapus': 'Deleted',
        'Riwayat berhasil dihapus dari SQLite.': 'History entry deleted from SQLite.'
    };

    const reverseTranslations = new Map(
        Object.entries(translations).map(([indonesian, english]) => [english, indonesian])
    );
    const englishTranslations = new Map(
        Object.entries(translations).map(([indonesian, english]) => [indonesian, english])
    );

    function currentLanguage() {
        return window.appLanguage || 'id';
    }

    function translatePhrase(value) {
        const language = currentLanguage();
        const exportPattern = language === 'en'
            ? /^Ekspor (TXT|MD) berhasil diunduh!$/
            : /^(TXT|MD) export downloaded!$/;
        const exportMatch = value.match(exportPattern);
        if (exportMatch) {
            return language === 'en'
                ? `${exportMatch[1]} export downloaded!`
                : `Ekspor ${exportMatch[1]} berhasil diunduh!`;
        }
        const pageCountPattern = language === 'en'
            ? /^Halaman (\d+) dari (\d+)$/
            : /^Page (\d+) of (\d+)$/;
        const pageCount = value.match(pageCountPattern);
        if (pageCount) {
            return language === 'en'
                ? `Page ${pageCount[1]} of ${pageCount[2]}`
                : `Halaman ${pageCount[1]} dari ${pageCount[2]}`;
        }
        const resultCountPattern = language === 'en'
            ? /^Menampilkan (.+)–(.+) dari (.+) video$/
            : /^Showing (.+)–(.+) of (.+) videos$/;
        const resultCount = value.match(resultCountPattern);
        if (resultCount) {
            return language === 'en'
                ? `Showing ${resultCount[1]}–${resultCount[2]} of ${resultCount[3]} videos`
                : `Menampilkan ${resultCount[1]}–${resultCount[2]} dari ${resultCount[3]} video`;
        }
        const exact = language === 'en'
            ? englishTranslations.get(value) || value
            : reverseTranslations.get(value) || value;
        if (exact !== value) {
            return exact;
        }

        const source = language === 'en' ? englishTranslations : reverseTranslations;
        for (const [from, to] of source) {
            if (from && value.startsWith(from) && from.length > 10) {
                return to + value.slice(from.length);
            }
        }
        return value;
    }

    function translateNode(node) {
        if (!node.parentElement || node.parentElement.closest('[data-no-translate], script, style')) return;
        const value = node.nodeValue;
        const trimmed = value.trim();
        if (!trimmed) return;
        const translated = translatePhrase(trimmed);
        if (translated !== trimmed) {
            node.nodeValue = value.replace(trimmed, translated);
        }
    }

    function translatePage() {
        document.documentElement.lang = currentLanguage() === 'id' ? 'id' : 'en';
        document.title = translatePhrase(document.title);
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let node;
        while ((node = walker.nextNode())) {
            if (!node.parentElement.closest('[data-no-translate], script, style')) {
                translateNode(node);
            }
        }
        document.querySelectorAll('[placeholder], [aria-label], [title]').forEach(element => {
            ['placeholder', 'aria-label', 'title'].forEach(attribute => {
                if (element.hasAttribute(attribute)) {
                    element.setAttribute(attribute, translatePhrase(element.getAttribute(attribute)));
                }
            });
        });
    }

    window.appLanguage = localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'id';
    window.translateAppText = translatePhrase;
    translatePage();

    const languageSelect = document.getElementById('appLanguage');
    languageSelect.value = window.appLanguage;
    languageSelect.addEventListener('change', () => {
        window.appLanguage = languageSelect.value;
        localStorage.setItem(STORAGE_KEY, window.appLanguage);
        translatePage();
        window.dispatchEvent(new Event('app-language-changed'));
    });

    new MutationObserver(records => {
        records.forEach(record => {
            if (record.type === 'characterData') {
                translateNode(record.target);
            }
            record.addedNodes.forEach(addedNode => {
                if (addedNode.nodeType === Node.TEXT_NODE) {
                    translateNode(addedNode);
                } else if (addedNode.nodeType === Node.ELEMENT_NODE) {
                    const walker = document.createTreeWalker(addedNode, NodeFilter.SHOW_TEXT);
                    let node;
                    while ((node = walker.nextNode())) translateNode(node);
                }
            });
        });
    }).observe(document.body, {childList: true, characterData: true, subtree: true});
})();
